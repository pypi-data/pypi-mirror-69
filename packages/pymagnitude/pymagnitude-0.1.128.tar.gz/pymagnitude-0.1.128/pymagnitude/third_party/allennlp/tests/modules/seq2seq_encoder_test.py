# pylint: disable=no-self-use,invalid-name


from __future__ import with_statement
from __future__ import absolute_import
import pytest

from allennlp.common import Params
from allennlp.common.checks import ConfigurationError
from allennlp.modules import Seq2SeqEncoder
from allennlp.common.testing import AllenNlpTestCase


class TestSeq2SeqEncoder(AllenNlpTestCase):
    def test_from_params_builders_encoder_correctly(self):
        # We're just making sure parameters get passed through correctly here, and that the basic
        # API works.
        params = Params({
                u"type": u"lstm",
                u"bidirectional": True,
                u"num_layers": 3,
                u"input_size": 5,
                u"hidden_size": 7
                })
        encoder = Seq2SeqEncoder.from_params(params)
        # pylint: disable=protected-access
        assert encoder.__class__.__name__ == u'PytorchSeq2SeqWrapper'
        assert encoder._module.__class__.__name__ == u'LSTM'
        assert encoder._module.num_layers == 3
        assert encoder._module.input_size == 5
        assert encoder._module.hidden_size == 7
        assert encoder._module.bidirectional is True
        assert encoder._module.batch_first is True

    def test_from_params_requires_batch_first(self):
        params = Params({
                u"type": u"lstm",
                u"batch_first": False,
                })
        with pytest.raises(ConfigurationError):
            # pylint: disable=unused-variable
            encoder = Seq2SeqEncoder.from_params(params)
