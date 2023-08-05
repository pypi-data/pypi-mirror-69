# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ChargebackWorkflowDigestSplitChild(Model):
    """ChargebackWorkflowDigestSplitChild.

    :param meter:
    :type meter: ~energycap.sdk.models.MeterChild
    :param current_period:
    :type current_period: ~energycap.sdk.models.BillingPeriodUseCostChild
    :param prior_period:
    :type prior_period: ~energycap.sdk.models.BillingPeriodUseCostDeltaChild
    :param prior_year:
    :type prior_year: ~energycap.sdk.models.BillingPeriodUseCostDeltaChild
    """

    _attribute_map = {
        'meter': {'key': 'meter', 'type': 'MeterChild'},
        'current_period': {'key': 'currentPeriod', 'type': 'BillingPeriodUseCostChild'},
        'prior_period': {'key': 'priorPeriod', 'type': 'BillingPeriodUseCostDeltaChild'},
        'prior_year': {'key': 'priorYear', 'type': 'BillingPeriodUseCostDeltaChild'},
    }

    def __init__(self, meter=None, current_period=None, prior_period=None, prior_year=None):
        super(ChargebackWorkflowDigestSplitChild, self).__init__()
        self.meter = meter
        self.current_period = current_period
        self.prior_period = prior_period
        self.prior_year = prior_year
