# Copyright (c) Facebook, Inc. and its affiliates.

from mmf.common.sample import SampleList
from mmf.common.test_reporter import TestReporter
from mmf.datasets.multi_dataset import MultiDataset


class DatasetLoader:
    def __init__(self, config):
        self.config = config

    def load_datasets(self):
        self.train_dataset = MultiDataset("train")
        self.val_dataset = MultiDataset("val")
        self.test_dataset = MultiDataset("test")

        self.train_dataset.load(self.config)
        self.val_dataset.load(self.config)
        self.test_dataset.load(self.config)

        # If number of datasets is one, this will return the first loader
        self.train_loader = self.train_dataset
        self.val_loader = self.val_dataset
        self.test_loader = self.test_dataset

        self.mapping = {
            "train": self.train_dataset,
            "val": self.val_dataset,
            "test": self.test_dataset,
        }

        self.test_reporter = None
        self.should_not_log = self.config.training.should_not_log

    @property
    def dataset_config(self):
        return self._dataset_config

    @dataset_config.setter
    def dataset_config(self, config):
        self._dataset_config = config

    def get_config(self):
        return self._dataset_config

    def get_test_reporter(self, dataset_type):
        dataset = getattr(self, "{}_dataset".format(dataset_type))
        return TestReporter(dataset)

    def update_registry_for_model(self, config):
        self.train_dataset.update_registry_for_model(config)
        self.val_dataset.update_registry_for_model(config)
        self.test_dataset.update_registry_for_model(config)

    def clean_config(self, config):
        self.train_dataset.clean_config(config)
        self.val_dataset.clean_config(config)
        self.test_dataset.clean_config(config)

    def prepare_batch(self, batch, *args, **kwargs):
        batch = SampleList(batch)
        return self.mapping[batch.dataset_type].prepare_batch(batch)

    def verbose_dump(self, report, *args, **kwargs):
        if self.config.training.verbose_dump:
            dataset_type = report.dataset_type
            self.mapping[dataset_type].verbose_dump(report, *args, **kwargs)

    def seed_sampler(self, dataset_type, seed):
        dataset = getattr(self, "{}_dataset".format(dataset_type))
        dataset.seed_sampler(seed)
