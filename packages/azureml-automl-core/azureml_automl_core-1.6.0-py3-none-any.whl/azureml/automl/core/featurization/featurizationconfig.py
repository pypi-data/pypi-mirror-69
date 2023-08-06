# ---------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# ---------------------------------------------------------
"""Contains functionality for automated ML feature engineering in Azure Machine Learning."""
from typing import Any, Dict, List, Optional, Tuple, Union
import json
import logging

from azureml.automl.core.shared.exceptions import (ConfigException,
                                                   MissingValueException,
                                                   InvalidValueException)
from azureml.automl.core.shared.constants import TimeSeriesInternal
from azureml.automl.core.shared.reference_codes import ReferenceCodes
from azureml.automl.core.shared.types import ColumnTransformerParamType
from azureml.automl.core.constants import (SupportedTransformers as _SupportedTransformers,
                                           FeatureType as _FeatureType,
                                           TransformerParams as _TransformerParams)


class FeaturizationConfig:
    """
    Defines feature engineering configuration for automated machine learning experiments in Azure Machine Learning.

    Use FeaturizationConfig in the :class:`azureml.train.automl.automlconfig.AutoMLConfig` class ``featurization``
    parameter to configure featurization for automated ML experiments.

    :param blocked_transformers:
        A list of transformer names to be blocked during featurization.
    :type blocked_transformers: list(str)
    :param column_purposes:
        A dictionary of column names and feature types used to update column purpose.
    :type column_purposes: dict
    :param transformer_params:
        A dictionary of transformer and corresponding customization parameters.
    :type transformer_params: dict
    :param drop_columns:
        A list of columns to be ignored from featurization process.
    :type drop_columns: list(str)
    """
    def __init__(
            self,
            blocked_transformers: Optional[List[str]] = None,
            column_purposes: Optional[Dict[str, str]] = None,
            transformer_params: Optional[Dict[str, List[ColumnTransformerParamType]]] = None,
            drop_columns: Optional[List[str]] = None
    ) -> None:
        """
        Create a FeaturizationConfig.

        :param blocked_transformers: List of transformer names to be blocked during featurization.
        :type blocked_transformers: list(str)
        :param column_purposes: Dictionary of column names and feature types used to update column purpose.
        :type column_purposes: dict
        :param transformer_params: Dictionary of transformer and corresponding customization parameters.
        :type transformer_params: dict
        :param drop_columns: List of columns to be ignored from featurization process.
        :type drop_columns: list(str)
        """
        self._blocked_transformers = blocked_transformers
        self._column_purposes = column_purposes
        self._transformer_params = transformer_params
        self._drop_columns = drop_columns

        self._validate_featurization_config_input()

    def add_column_purpose(self, column_name: str, feature_type: str) -> None:
        """
        Add a feature type for the specified column.

        :param column_name: A column name to update.
        :type column_name: str
        :param feature_type: A feature type to use for the column.
        :type feature_type: azureml.automl.core.constants.FeatureType
        """
        self._validate_feature_type(feature_type=feature_type)

        if self._column_purposes is None:
            self._column_purposes = {column_name: feature_type}
        else:
            self._column_purposes[column_name] = feature_type
        self._validate_column_purpose_column_names()

    def remove_column_purpose(self, column_name: str) -> None:
        """
        Remove the feature type for the specified column.

        If no feature is specified for a column, the detected default feature is used.

        :param column_name: The column name to update.
        :type column_name: str
        """
        if self._column_purposes is not None:
            self._column_purposes.pop(column_name, None)

    def add_blocked_transformers(self, transformers: Union[str, List[str]]) -> None:
        """
        Add transformers to be blocked.

        :param transformers: A transformer name or list of transformer names.
        :type transformers: str or list[str]
        """
        # validation
        self._validate_blocked_transformer_names(transformers)
        self._blocked_transformers = self._append_to_list(transformers, self._blocked_transformers)

    def add_drop_columns(self, drop_columns: Union[str, List[str]]) -> None:
        """
        Add column name or list of column names to ignore columns list.

        :param drop_columns: A column name or list of column names.
        :type drop_columns: str or list[str]
        """
        self._drop_columns = self._append_to_list(drop_columns, self._drop_columns)
        self._validate_column_purpose_column_names()
        self._validate_transformer_column_names()

    def add_transformer_params(self, transformer: str, cols: List[str], params: Dict[str, Any]) -> None:
        """
        Add customized transformer parameters to the list of custom transformer parameters.

        Apply to all columns if column list is empty.

        :param transformer: The transformer name.
        :type transformer: str
        :param cols: Input columns for specified transformer.
            Some transformers can take multiple column as input, hence accepting list.
        :type cols: list(str)
        :param params: Dictionary of keywords and arguments.
        :type params: dict
        """
        self._validate_customizable_transformers(transformer=transformer, params=params)

        if self._transformer_params is None:
            self._transformer_params = {transformer: [(cols, params)]}
        else:
            self.remove_transformer_params(transformer, cols)
            if transformer in self._transformer_params:
                self._transformer_params[transformer].append((cols, params))
            else:
                self._transformer_params[transformer] = [(cols, params)]
        self._validate_transformer_column_names()

    def get_transformer_params(self, transformer: str, cols: List[str]) -> Dict[str, Any]:
        """
        Retrieve transformer customization parameters for columns.

        :param transformer: Transformer name.
        :type transformer: str
        :param cols: The columns names to get information for. Use an empty list to specify all columns.
        :type cols: list[str]
        :return: Transformer params settings.
        :rtype: dict
        """
        if self._transformer_params is not None and transformer in self._transformer_params:

            separator = '#'
            column_transformer_params = list(
                filter(lambda item: separator.join(item[0]) == separator.join(cols),
                       self._transformer_params[transformer]))
            if len(column_transformer_params) == 1:
                return column_transformer_params[0][1]
        return {}

    def remove_transformer_params(
            self,
            transformer: str,
            cols: Optional[List[str]] = None
    ) -> None:
        """
        Remove transformer customization parameters for specific column or all columns.

        :param transformer: The transformer name.
        :type transformer: str
        :param cols: The columns names to remove customization parameters from. Specify None (the default)
            to remove all customization params for the specified transformer.
        :type cols: list[str] or None
        """
        self._validate_transformer_names(transformer)

        if self._transformer_params is not None and transformer in self._transformer_params:
            if cols is None:
                self._transformer_params.pop(transformer, None)
            else:
                # columns = cols  # type: List[str]
                separator = '#'
                column_transformer_params = [item for item in self._transformer_params[transformer]
                                             if separator.join(item[0]) != separator.join(cols)]
                if len(column_transformer_params) == 0:
                    self._transformer_params.pop(transformer, None)
                else:
                    self._transformer_params[transformer] = column_transformer_params

    def _validate_featurization_config_input(self):
        if self._blocked_transformers is not None:
            self._validate_transformer_names(self._blocked_transformers)
        if self._column_purposes is not None:
            for feature_type in self._column_purposes.values():
                self._validate_feature_type(feature_type)
        self._validate_column_purpose_column_names()
        if self._transformer_params is not None:
            for transformer_name, column_transformer_params in self._transformer_params.items():
                for col, params in column_transformer_params:
                    self._validate_customizable_transformers(transformer=transformer_name, params=params)
        self._validate_transformer_column_names()

    def _validate_transformer_names(self, transformer: Union[str, List[str]]) -> None:
        if isinstance(transformer, str):
            self._validate_transformer_fullset(transformer)
        else:
            for t in transformer:
                self._validate_transformer_fullset(t)

    def _validate_blocked_transformer_names(self, transformer: Union[str, List[str]]) -> None:
        if isinstance(transformer, str):
            self._validate_transformer_fullset(transformer)
            self._validate_transformer_blockedlist(transformer)
        else:
            for t in transformer:
                self._validate_transformer_fullset(t)
                self._validate_transformer_blockedlist(t)

    def _validate_transformer_column_names(self) -> None:
        if self.drop_columns is None or self.transformer_params is None:
            return None
        column_list = []
        for column_transformer_params in self.transformer_params.values():
            for cols, _ in column_transformer_params:
                column_list.extend([col for col in cols])
        self._validate_columns_list_in_drop_columns(
            column_list, "transformer_params", "featurization_config.transformer_params",
            ReferenceCodes._FEATURIZATION_CONFIG_IMPUTE_COLUMN_DROPPED)

    def _validate_column_purpose_column_names(self) -> None:
        if self.drop_columns is None or self.column_purposes is None:
            return None
        column_list = [col for col in self.column_purposes.keys()]
        self._validate_columns_list_in_drop_columns(
            column_list, "column_purposes", "featurization_config.column_purposes",
            ReferenceCodes._FEATURIZATION_CONFIG_COLUNN_PURPOSE_DROPPED)

    def _validate_columns_list_in_drop_columns(
            self,
            columns_list: List[str],
            config_name: str,
            target_name: str,
            reference_code: str
    ) -> None:
        dropped_columns = [col for col in columns_list if col in self.drop_columns]
        if len(dropped_columns) > 0:
            raise InvalidValueException(
                "Featurization {} customization contains {} which {} in drop columns.".format(
                    config_name,
                    ",".join(dropped_columns),
                    "is" if len(dropped_columns) == 1 else "are"
                ),
                target=target_name,
                reference_code=reference_code).with_generic_msg(
                "{} configuration was provided for a column configured to be dropped.".format(config_name))

    @staticmethod
    def _append_to_list(items: Union[str, List[str]], origin_list: Optional[List[str]]) -> List[str]:
        extend_list = [items] if isinstance(items, str) else items
        new_list = [] if origin_list is None else origin_list
        new_list.extend(extend_list)
        return new_list

    @staticmethod
    def _validate_feature_type(feature_type: str) -> None:
        if feature_type not in _FeatureType.FULL_SET:
            msg = "Invalid feature_type specified. Please use one of {}."
            msg = msg.format(_FeatureType.FULL_SET)
            raise ConfigException.create_without_pii(
                msg, reference_code=ReferenceCodes._FEATURIZATION_CONFIG_VALIDATE_FEATURE_TYPE)

    @staticmethod
    def _validate_customizable_transformers(transformer: str, params: Dict[str, Any]) -> None:
        # Validate whether transformer is supported for customization
        if transformer not in _SupportedTransformers.CUSTOMIZABLE_TRANSFORMERS:
            raise ConfigException.create_without_pii(
                "Input transformer not available for customization.",
                reference_code=ReferenceCodes._FEATURIZATION_CONFIG_VALIDATE_CUSTOMIZABLE)
        if transformer == _SupportedTransformers.Imputer:
            strategy = params.get(_TransformerParams.Imputer.Strategy)
            if strategy == _TransformerParams.Imputer.Constant and\
                    params.get(_TransformerParams.Imputer.FillValue) is None:
                raise MissingValueException(
                    "Fill value cannot be None for constant value imputation.",
                    target=_TransformerParams.Imputer.FillValue,
                    reference_code=ReferenceCodes._FEATURIZATION_CONFIG_MISSING_IMPUTE_VALUE,
                    has_pii=False)

    @staticmethod
    def _validate_transformer_fullset(transformer: str) -> None:
        if transformer not in _SupportedTransformers.FULL_SET:
            msg = "Invalid transformer specified. Please use one of {}."
            msg = msg.format(_SupportedTransformers.FULL_SET)
            raise ConfigException.create_without_pii(
                msg, reference_code=ReferenceCodes._FEATURIZATION_CONFIG_VALIDATE_FULLSET)

    @staticmethod
    def _validate_transformer_blockedlist(transformer: str) -> None:
        if transformer not in _SupportedTransformers.BLOCK_TRANSFORMERS:
            raise ConfigException.create_without_pii(
                "Input transformer cannot be blocked.",
                reference_code=ReferenceCodes._FEATURIZATION_CONFIG_VALIDATE_BLOCKEDLIST)

    @staticmethod
    def _is_featurization_dict_empty(featurization_dict: Dict[str, Any]) -> bool:
        if len(featurization_dict) == 0:
            return True
        for _, value in featurization_dict.items():
            if value is not None and len(value) > 0:
                return False
        return True

    @property
    def blocked_transformers(self):
        return self._blocked_transformers

    @blocked_transformers.setter
    def blocked_transformers(self, blocked_transformers: List[str]) -> None:
        if blocked_transformers is not None:
            self._validate_blocked_transformer_names(blocked_transformers)
        self._blocked_transformers = blocked_transformers

    @property
    def column_purposes(self):
        return self._column_purposes

    @column_purposes.setter
    def column_purposes(self, column_purposes: Dict[str, str]) -> None:
        if column_purposes is not None:
            for column_name, feature_type in column_purposes.items():
                self._validate_feature_type(feature_type=feature_type)
        self._column_purposes = column_purposes

    @property
    def drop_columns(self):
        return self._drop_columns

    @drop_columns.setter
    def drop_columns(self, drop_columns: List[str]) -> None:
        self._drop_columns = drop_columns

    @property
    def transformer_params(self):
        return self._transformer_params

    @transformer_params.setter
    def transformer_params(self, transformer_params: Dict[str, List[ColumnTransformerParamType]]) -> None:
        if transformer_params is not None:
            for transformer, list_of_tuples in transformer_params.items():
                self._validate_transformer_names(transformer=transformer)
                for cols, params in list_of_tuples:
                    self._validate_customizable_transformers(transformer=transformer, params=params)
        self._transformer_params = transformer_params

    def _from_dict(self, dict):
        for key, value in dict.items():
            if key not in self.__dict__.keys():
                logging.warning("Received unrecognized parameters for FeaturizationConfig")
            else:
                setattr(self, key, value)

    def _convert_timeseries_target_column_name(self, label_column_name: str) -> None:
        if self.transformer_params is not None:
            if self.transformer_params.get(_SupportedTransformers.Imputer) is not None:
                for cols, params in self.transformer_params[_SupportedTransformers.Imputer]:
                    if label_column_name in cols:
                        cols.remove(label_column_name)
                        cols.append(TimeSeriesInternal.DUMMY_TARGET_COLUMN)

    def __str__(self):
        return json.dumps(self.__dict__)
