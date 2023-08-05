# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class EnergyStarPlacePropertyResponse(Model):
    """EnergyStarPlacePropertyResponse.

    :param energy_star_property_id: The energy star place property identifier
    :type energy_star_property_id: int
    :param property_id: The property identifier
    :type property_id: int
    :param effective_date: The effective date
    :type effective_date: datetime
    :param value: The value of the property
    :type value: str
    :param place_type_code: The place type code
    :type place_type_code: str
    :param place_type_info: The place type information
    :type place_type_info: str
    :param datatype:
    :type datatype: ~energycap.sdk.models.DataTypeResponse
    :param caption: The caption for the property
    :type caption: str
    :param default_value: The default value of the property
    :type default_value: str
    :param min_value: The minimum value of the property
    :type min_value: str
    :param max_value: The maximum value of the property
    :type max_value: str
    :param required: Whether the property is required or not required
    :type required: bool
    """

    _attribute_map = {
        'energy_star_property_id': {'key': 'energyStarPropertyId', 'type': 'int'},
        'property_id': {'key': 'propertyId', 'type': 'int'},
        'effective_date': {'key': 'effectiveDate', 'type': 'iso-8601'},
        'value': {'key': 'value', 'type': 'str'},
        'place_type_code': {'key': 'placeTypeCode', 'type': 'str'},
        'place_type_info': {'key': 'placeTypeInfo', 'type': 'str'},
        'datatype': {'key': 'datatype', 'type': 'DataTypeResponse'},
        'caption': {'key': 'caption', 'type': 'str'},
        'default_value': {'key': 'defaultValue', 'type': 'str'},
        'min_value': {'key': 'minValue', 'type': 'str'},
        'max_value': {'key': 'maxValue', 'type': 'str'},
        'required': {'key': 'required', 'type': 'bool'},
    }

    def __init__(self, energy_star_property_id=None, property_id=None, effective_date=None, value=None, place_type_code=None, place_type_info=None, datatype=None, caption=None, default_value=None, min_value=None, max_value=None, required=None):
        super(EnergyStarPlacePropertyResponse, self).__init__()
        self.energy_star_property_id = energy_star_property_id
        self.property_id = property_id
        self.effective_date = effective_date
        self.value = value
        self.place_type_code = place_type_code
        self.place_type_info = place_type_info
        self.datatype = datatype
        self.caption = caption
        self.default_value = default_value
        self.min_value = min_value
        self.max_value = max_value
        self.required = required
