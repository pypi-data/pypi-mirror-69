# pylint: disable=unused-import

from __future__ import absolute_import
import warnings

from allennlp.predictors.constituency_parser import ConstituencyParserPredictor
warnings.warn(u"allennlp.service.predictors.* has been deprecated. "
              u"Please use allennlp.predictors.*", FutureWarning)
