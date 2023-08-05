# SPDX-FileCopyrightText: 2020 Hlib Babii <hlibbabii@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0

"""This module runs different stages of preprocessing flow and makes sure not to rerun a stage if its results are already available.
"""
import logging
import os
from typing import Optional

from codeprep.pipeline import parse_projects, to_repr
from codeprep.pipeline.bperegistry import CustomBpeConfig
from codeprep.pipeline.dataset import Dataset, is_path_ready, is_path_outdated, archive_path
from codeprep.pipeline.vocab import calc_vocab

logger = logging.getLogger(__name__)

#TODO remove code duplication in methods below
def run_parsing(dataset: Dataset) -> None:
    logger.info("Parsing...")
    if not dataset.parsed.ready():
        parse_projects.run(dataset)
    elif dataset.parsed.is_outdated():
        dataset.parsed.archive()
        parse_projects.run(dataset)
    else:
        logger.info("Parsed dataset is up-to-date.")


def run_until_preprocessing(dataset: Dataset, custom_bpe_config: Optional[CustomBpeConfig]=None) -> None:
    run_parsing(dataset)
    logger.info("Preprocessing...")
    if not dataset.preprocessed.ready():
        to_repr.run(dataset, custom_bpe_config)
    elif dataset.preprocessed.is_outdated():
        dataset.preprocessed.archive()
        to_repr.run(dataset, custom_bpe_config)
    else:
        logger.info(f"Dataset is already preprocessed and up-to-date.")


def run_until_base_bpe_vocab(dataset: Dataset, custom_bpe_config: Optional[CustomBpeConfig]=None) -> None:
    run_until_preprocessing(dataset, custom_bpe_config)
    logger.info("Computing base bpe vocab...")
    if not is_path_ready(dataset.path_to_bpe_vocab_file):
        calc_vocab(dataset.preprocessed.path, dataset.preprocessed.file_iterator(), dataset.base_bpe_vocab_path)
    elif is_path_outdated(dataset.path_to_bpe_vocab_file):
        archive_path(dataset.path_to_bpe_vocab_file)
        calc_vocab(dataset.preprocessed.path, dataset.preprocessed.file_iterator(), dataset.base_bpe_vocab_path)
    else:
        logger.info("Vocabulary is already computed and up-to-date")


def run_until_vocab(dataset: Dataset, custom_bpe_config: Optional[CustomBpeConfig]=None) -> None:
    logger.info(f'Checking first if vocabulary file exists: {dataset.path_to_vocab_file}')
    if os.path.exists(dataset.path_to_vocab_file):
        logger.info("Vocabulary is already computed and up-to-date")
        return

    if not is_path_ready(dataset.path_to_vocab_file):
        run_until_preprocessing(dataset, custom_bpe_config)
        logger.info("Computing vocab...")
        calc_vocab(dataset.preprocessed.path, dataset.preprocessed.file_iterator(), dataset.vocab_path)
    elif is_path_outdated(dataset.path_to_vocab_file):
        run_until_preprocessing(dataset, custom_bpe_config)
        logger.info("Computing vocab...")
        archive_path(dataset.path_to_bpe_vocab_file)
        calc_vocab(dataset.preprocessed.path, dataset.preprocessed.file_iterator(), dataset.vocab_path)
    else:
        raise AssertionError()