# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class TooManyConsecutiveEstimatedBillsSetting(Model):
    """TooManyConsecutiveEstimatedBillsSetting.

    :param bills: Threshold for how many bills can be estimated in a row
     If SettingStatus is set to Skip and no value is provided, EnergyCAP
     default will be set <span class='property-internal'>Must be between 1 and
     2147483647</span> <span class='property-internal'>Required when
     SettingStatus is set to Check, or Hold</span>
    :type bills: int
    :param setting_status: The status of the audit setting <span
     class='property-internal'>One of Check, Hold, Skip </span>
    :type setting_status: str
    :param setting_code: The setting code. Not used when updating settings.
    :type setting_code: str
    :param setting_description: A description of the setting. Not used when
     updating settings
    :type setting_description: str
    """

    _validation = {
        'bills': {'maximum': 2147483647, 'minimum': 1},
    }

    _attribute_map = {
        'bills': {'key': 'bills', 'type': 'int'},
        'setting_status': {'key': 'settingStatus', 'type': 'str'},
        'setting_code': {'key': 'settingCode', 'type': 'str'},
        'setting_description': {'key': 'settingDescription', 'type': 'str'},
    }

    def __init__(self, bills=None, setting_status=None, setting_code=None, setting_description=None):
        super(TooManyConsecutiveEstimatedBillsSetting, self).__init__()
        self.bills = bills
        self.setting_status = setting_status
        self.setting_code = setting_code
        self.setting_description = setting_description
