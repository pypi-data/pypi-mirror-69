import os
import logging
from typing import Callable
from typing import Iterable
from typing import List

import transformers
from google.cloud.exceptions import NotFound

from . import utils
from .data_types import LabeledExample
from .models import BertABSCConfig
from .models import BertABSClassifier
from .pipelines import BertPipeline
from .pipelines import Pipeline
from .probing import PatternRecognizer

logger = logging.getLogger('absa.load')
ROOT_DIR = os.path.abspath(os.path.dirname(__file__))
DOWNLOADS_DIR = os.path.join(ROOT_DIR, 'downloads')


def load(
        name: str = 'absa/classifier-rest-0.1',
        text_splitter: Callable[[str], List[str]] = None,
        pattern_recognizer: PatternRecognizer = None,
        **model_kwargs
) -> Pipeline:
    """ Load ready to use pipelines. Files are stored on
    the HaggingFace AWS S3. """
    try:
        config = BertABSCConfig.from_pretrained(name, **model_kwargs)
        model = BertABSClassifier.from_pretrained(name, config=config)
        tokenizer = transformers.BertTokenizer.from_pretrained(name)
        nlp = BertPipeline(model, tokenizer, text_splitter, pattern_recognizer)
        return nlp

    except EnvironmentError as error:
        text = 'Model or Tokenizer not found. Please check a documentation.'
        logger.error(text)
        raise error


def load_docs(fname: str) -> Iterable[List[str]]:
    """ The function loads documents used for the language modeling. """
    raise NotImplemented


def load_examples(
        dataset: str = 'semeval',
        domain: str = 'laptop',
        test: bool = False
) -> List[LabeledExample]:
    """ Download a dataset from the bucket if it is needed. """
    split = 'train' if not test else 'test'
    name = f'classifier-{dataset}-{domain}-{split}.bin'
    local_path = os.path.join(DOWNLOADS_DIR, name)

    try:
        local_path = utils.file_from_bucket(name)
        examples = utils.load(local_path)
        return examples

    except NotFound as error:
        if os.path.isfile(local_path):
            os.remove(local_path)
        text = 'Dataset not found. Please check a documentation.'
        logger.error(text)
        raise error
