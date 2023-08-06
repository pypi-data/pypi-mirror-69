import os

from data_mine import Collection
from data_mine.constants import PROJECT_ROOT
from data_mine.utils import datamine_cache_dir
from data_mine.utils import file_sha256
from data_mine.zookeeper import load_datasets_config
from data_mine.zookeeper.utils import load_integrity_file


def check_shallow_integrity(dataset_id):
    """
    Verifies if the dataset's local copy is valid in a shallow way.

    The function just checks if the required files are present locally
    and no checksum is checked at all. If you want the checksums
    to be checked, please refer to the `check_deep_integrity` function.

    Returns:
        result (bool): True if the dataset is valid, False otherwise.
    """
    assert(isinstance(dataset_id, Collection))
    config = load_datasets_config()[dataset_id.name]
    cache_dir = os.path.join(datamine_cache_dir(), dataset_id.name)
    for _, expected_file in load_integrity_file(os.path.join(PROJECT_ROOT, config["expectedFiles"])):  # noqa: E501
        expected_file = os.path.join(cache_dir, expected_file)
        if not os.path.isfile(expected_file):
            return False
    return True


def check_deep_integrity(dataset_id):
    """
    Verifies if the dataset's local copy is valid in a deep way.

    The function checks if the required files are present locally AND the
    checksums are valid. This function can read a large amount of data from
    the disk (to compute file hashes) and it can be slow. If you want
    a more shallow of integrity verification please refer to the alternative
    function: `check_deep_integrity`.

    Returns:
        result (bool): True if the dataset is valid, False otherwise.
    """
    assert(isinstance(dataset_id, Collection))
    config = load_datasets_config()[dataset_id.name]
    cache_dir = os.path.join(datamine_cache_dir(), dataset_id.name)
    for sha256, expected_file in load_integrity_file(os.path.join(PROJECT_ROOT, config["expectedFiles"])):  # noqa: E501
        expected_file = os.path.join(cache_dir, expected_file)
        if not os.path.isfile(expected_file):
            return False
        if file_sha256(expected_file) != sha256:
            return False
    return True
