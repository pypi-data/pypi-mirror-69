from enum import IntEnum
from dataclasses import dataclass
from typing import Dict
from typing import OrderedDict
from typing import Iterable
from typing import List
from typing import Tuple

import tensorflow as tf


class Sentiment(IntEnum):
    """ We use the three basic polarities to
    classify the aspect based sentiment."""
    neutral = 0
    negative = 1
    positive = 2


@dataclass(frozen=True)
class Example:
    """ The example is the pair of two raw strings
    (text, aspect). This is the essential input data
    type to classify a text for a given aspect. """
    text: str
    aspect: str


@dataclass(frozen=True)
class LabeledExample(Example):
    """ The labeled example contains additionally
    the defined sentiment. """
    sentiment: Sentiment


@dataclass(frozen=True)
class TokenizedExample:
    """ We can not encode an example to the input tensors
    directly. We need to tokenize both strings (text, aspect)
    at the very beginning. Moreover, we have to split tokens
    to subtokens using the *word-piece tokenizer*, according
    to the input format of the language model. We take care to
    do the alignment between tokens and subtokens for better
    interpretability. For now, only the single word should
    describe an aspect (one token). """
    text: str
    text_tokens: List[str]
    text_subtokens: List[str]
    aspect: str
    aspect_tokens: List[str]
    aspect_subtokens: List[str]
    tokens: List[str]
    subtokens: List[str]
    alignment: List[List[int]]


@dataclass(frozen=True)
class Pattern:
    """ The weighted tokens describe the pattern. The pattern
    is an elementary tool to explain the model reasoning. Each
    pattern has a different `impact` to the final prediction. """
    impact: float
    tokens: List[str]
    weights: List[float]


@dataclass(frozen=True)
class AspectRepresentation:
    """ The aspect representation contains two special patterns
    related to the aspect. Firstly, the `come_from` weights
    describe the aspect final representation. They tend to be
    sort of nominal modifiers. Secondly, the `look_at` weights
    describe how the aspect affects different words. These
    weights seem to indicates words which show coreference
    to the aspect. """
    tokens: List[str]
    come_from: List[float]
    look_at: List[float]


@dataclass(frozen=True)
class PredictedExample(TokenizedExample, LabeledExample):
    """ After the classification, each example has a predicted
    label and scores for each sentiment class. The aspect
    representation and patterns are optional. They are if
    a pipeline has a pattern recognizer. """
    scores: List[float]
    aspect_representation: AspectRepresentation = None
    patterns: List[Pattern] = None


@dataclass(frozen=True)
class SubTask:
    """ The subtask is to classify the sentiment of a
    potentially long text for a single aspect. In contrast to
    convert the pair of two strings (text, aspect) into the
    example directly and tokenize it, we may need to split a
    long text into smaller text chunks, called spans. The span
    can have a single sentence or several sentences (it
    depends how works the provided *text_splitter* in a
    pipeline). In consequences, the subtask contains several
    example. Please note that longer spans have the richer
    context information. """
    text: str
    aspect: str
    examples: List[TokenizedExample]

    def __iter__(self) -> Iterable[TokenizedExample]:
        return iter(self.examples)


@dataclass(frozen=True)
class CompletedSubTask(SubTask):
    """ The completed subtask keeps the subtask predicted
    example after the classification. Also, it aggregates
    the overall sentient and scores over spans. """
    examples: List[PredictedExample]
    sentiment: Sentiment
    scores: List[float]


@dataclass(frozen=True)
class Task:
    """ The task keeps text and aspects in the form of
    well-prepared tokenized example. The task is to classify
    the sentiment of a potentially long text for several aspects.
    Even some research presents how to predict several aspects
    at once, we process aspects independently. We split the task
    into subtasks, where each subtask concerns one aspect. """
    text: str
    aspects: List[str]
    subtasks: OrderedDict[str, SubTask]

    @property
    def indices(self) -> List[Tuple[int, int]]:
        """ Get indices of example in the batch. """
        indices = []
        start, end = 0, 0
        for subtask in self:
            length = len(list(subtask))
            end += length
            indices.append((start, end))
            start += length
        return indices

    @property
    def batch(self) -> List[TokenizedExample]:
        """ Stack example from each subtask into one batch. """
        return [example for subtask in self for example in subtask]

    def __getitem__(self, aspect: str):
        return self.subtasks[aspect]

    def __iter__(self) -> Iterable[SubTask]:
        return (self[aspect] for aspect in self.aspects)


@dataclass(frozen=True)
class CompletedTask(Task):
    """ The completed task keeps the predicted example after
    the classification. A pipeline returns it as the final
    prediction result. """
    subtasks: Dict[str, CompletedSubTask]


@dataclass(frozen=True)
class InputBatch:
    """ The model uses these tensors to perform a prediction.
    The names are compatible with the *transformers* package.
    The `token_ids` contains indices of input sequence
    subtokens in the vocabulary. The `attention_mask` is used
    to avoid performing attention on padding token indices
    (this is not related with masks from the language modeling
    task). The `token_type_ids` is a segment token indices to
    indicate first and second portions of the inputs, zeros
    and ones. """
    token_ids: tf.Tensor
    attention_mask: tf.Tensor
    token_type_ids: tf.Tensor


@dataclass(frozen=True)
class OutputBatch:
    """ The model returns not only scores, the softmax of
    logits, but also stacked hidden states [example, layer,
    sequence, embedding], attentions [example, layer, head,
    attention, attention], and attention gradients with
    respect to the model output. All of them are useful not
    only for the classification, but also we use them to probe
    and understand model's decision-making. """
    scores: tf.Tensor
    hidden_states: tf.Tensor
    attentions: tf.Tensor
    attention_grads: tf.Tensor
