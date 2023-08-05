import abc
import logging
import math
import os
import time

import numpy as np

import pymia.data.assembler as asmbl
import pymia.deeplearning.config as cfg
import pymia.deeplearning.data_handler as hdlr
import pymia.deeplearning.logging as log
import pymia.deeplearning.model as mdl


class Trainer(abc.ABC):

    def __init__(self, data_handler: hdlr.DataHandler, logger: log.Logger, config: cfg.DeepLearningConfiguration,
                 model: mdl.Model):
        """Initializes a new instance of the Trainer class.

        The subclasses need to implement following methods:

         - train_batch
         - validate_batch
         - validate_on_subject
         - set_seed
         - init_subject_assembler
         - _check_and_load_if_model_exists

        Args:
            data_handler: A data handler for the training and validation datasets.
            logger: A logger, which logs the training process.
            config: A configuration with training parameters.
            model: The model to train.
        """
        self.epochs = config.epochs
        self.current_epoch = 1  # the current epoch
        self.current_step = 0  # the current step is equal to the amount of trained batches (TensorFlow notation)
        self.epoch_duration = 0  # the duration of one epoch in seconds

        self.model_dir = config.model_dir
        # note that in case of TensorFlow, the model path should be without an extension (e.g., '/your/path/model')
        # TensorFlow will then automatically append the epoch and file extensions.
        self.model_path = os.path.join(config.model_dir, config.model_file_name)
        self.best_model_path = os.path.join(config.model_dir, config.best_model_file_name)

        self.data_handler = data_handler
        self.logger = logger
        self.model = model

        self.validate_nth_epoch = config.validate_nth_epoch

        # the best model score used to save the best model and also to log the training progress
        self.best_model_score = math.inf  # the score (e.g., the value of a metric) of the best performing model
        self.best_model_score_is_positive = config.best_model_score_is_positive  # whether the best score is positive
        if self.best_model_score_is_positive:
            self.best_model_score = -math.inf
        self.best_model_score_name = config.best_model_score_name

        self.seed = config.seed  # used as initial seed in set_seed

        # logging properties
        self.log_nth_epoch = config.log_nth_epoch
        self.log_nth_batch = config.log_nth_batch
        self.log_visualization_nth_epoch = config.log_visualization_nth_epoch
        self.save_model_nth_epoch = config.save_model_nth_epoch
        self.save_validation_nth_epoch = config.save_validation_nth_epoch

    def train(self):
        """Trains a model, i.e. runs the epochs loop.

        This is the main method, which will call the other methods.
        """

        self._check_and_load_if_model_exists()
        for epoch in range(self.current_epoch, self.epochs + 1):
            self.current_epoch = epoch
            self.model.set_epoch(self.current_epoch)

            logging.info('Epoch {}: Start training'.format(self._get_current_epoch_formatted()))
            start_time = time.time()  # measure the epoch's time

            self.set_seed()
            subject_assembler = self.init_subject_assembler()  # todo: not optimal solution since it keeps everything in memory
            self.data_handler.dataset.set_extractor(self.data_handler.extractor_train)
            self.data_handler.dataset.set_transform(self.data_handler.extraction_transform_train)
            loss_sum = 0
            for batch_idx, batch in enumerate(self.data_handler.loader_train):
                prediction, loss_value = self.train_batch(batch_idx, batch)
                subject_assembler.add_batch(prediction, batch)
                loss_sum += loss_value

            # normalize loss value by the number of subjects
            loss_value_of_epoch = loss_sum / self.data_handler.no_subjects_train

            self.epoch_duration = time.time() - start_time

            logging.info('Epoch {}: Ended training in {:.5f} s'.format(self._get_current_epoch_formatted(),
                                                                       self.epoch_duration))
            logging.info('Epoch {}: Training loss of {:.5f}'.format(self._get_current_epoch_formatted(),
                                                                    loss_value_of_epoch))

            if epoch % self.log_nth_epoch == 0:
                self.logger.log_epoch(self.current_epoch, loss=loss_value_of_epoch, duration=self.epoch_duration)

            if epoch % self.log_visualization_nth_epoch == 0:
                self.logger.log_visualization(self.current_epoch)

            if epoch % self.validate_nth_epoch == 0:
                loss_validation, model_score = self.validate()

                self.logger.log_scalar('loss', loss_validation, self.current_epoch, False)
                logging.info('Epoch {}: Validation loss of {:.5f}'.format(self._get_current_epoch_formatted(),
                                                                          loss_validation))
                self.logger.log_scalar('model_score', model_score, self.current_epoch, False)
                logging.info('Epoch {}: Model score of {:.5f}'.format(self._get_current_epoch_formatted(),
                                                                      model_score))

                if (model_score > self.best_model_score and self.best_model_score_is_positive) or \
                        (model_score < self.best_model_score and not self.best_model_score_is_positive):
                    self.best_model_score = model_score
                    self.model.save(self.best_model_path, self.current_epoch, best_model_score=self.best_model_score,
                                    best_model_score_name=self.best_model_score_name)

                self.validate_on_subject(subject_assembler, True)  # also pass the test set to the validator

            if epoch % self.save_model_nth_epoch == 0:
                # note that the model saving needs to be done AFTER saving the best model (if any),
                # because for TensorFlow, saving the best model updates the best_model_score variable
                self.model.save(self.model_path, self.current_epoch)

    @abc.abstractmethod
    def train_batch(self, idx: int, batch: dict) -> (np.ndarray, float):
        """Trains a batch.

        Args:
            idx: The batch index.
            batch: The batch.

        Returns:
            The prediction and the loss value of the training.
        """
        pass

    def validate(self) -> (float, float):
        """Validates the model's performance on the validation set.

        Loops over the entire validation set, predicts the samples, and assembles them to subjects.
        Finally, validate_on_subject is called, which validates the model's performance on a subject level.

        Returns:
            (float, float): A tuple where the first element is the validation loss and the second is the model score.
        """

        subject_assembler = self.init_subject_assembler()
        self.data_handler.dataset.set_extractor(self.data_handler.extractor_valid)
        self.data_handler.dataset.set_transform(self.data_handler.extraction_transform_valid)
        loss_sum = 0
        for batch_idx, batch in enumerate(self.data_handler.loader_valid):
            prediction, loss_value = self.validate_batch(batch_idx, batch)
            # prediction = np.stack(batch['labels'], axis=0)  # use this line to verify assembling
            subject_assembler.add_batch(prediction, batch)
            loss_sum += loss_value

        # normalize loss value by the number of subjects
        loss_value_of_epoch = loss_sum / self.data_handler.no_subjects_valid

        return loss_value_of_epoch, self.validate_on_subject(subject_assembler, False)

    @abc.abstractmethod
    def validate_batch(self, idx: int, batch: dict) -> (np.ndarray, float):
        """Validates a batch.

        Args:
            idx: The batch index.
            batch: The batch.

        Returns:
            A tuple with the prediction and the loss value.
        """
        pass

    @abc.abstractmethod
    def validate_on_subject(self, subject_assembler: asmbl.Assembler, is_training: bool) -> float:
        """Validates the model's performance on the subject level.

        Args:
            subject_assembler: A subject assembler with the assembled predictions of the subjects.
            is_training: Indicates whether it are predictions on the training set or the validate set.

        Returns:
            float: The model score.
        """
        pass

    @abc.abstractmethod
    def set_seed(self):
        """Sets the seed."""
        pass

    @abc.abstractmethod
    def init_subject_assembler(self) -> asmbl.Assembler:
        """Initializes a subject assembler.

        The subject assembler is used in validate to assemble the predictions on the validation set.

        Returns:
            A subject assembler.
        """
        pass

    @abc.abstractmethod
    def _check_and_load_if_model_exists(self):
        """Checks and loads a model if it exists.

        The model should be loaded from the model_dir property. Note that this function needs to set the
        current_epoch, current_step, and best_model_score properties accordingly.
        """
        pass

    def _get_current_epoch_formatted(self) -> str:
        """Gets the current epoch formatted with leading zeros.

        Returns:
            A string with the formatted current epoch.
        """
        return str(self.current_epoch).zfill(len(str(self.epochs)))

    def _get_batch_index_formatted(self, batch_idx) -> str:
        """Gets the current batch index formatted with leading zeros.

        Returns:
            A string with the formatted batch index.
        """
        return str(batch_idx + 1).zfill(len(str(len(self.data_handler.loader_train))))

