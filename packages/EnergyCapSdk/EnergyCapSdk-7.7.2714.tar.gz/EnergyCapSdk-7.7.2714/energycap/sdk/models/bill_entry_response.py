# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class BillEntryResponse(Model):
    """BillEntryResponse.

    :param bill_id: The bill identifier
    :type bill_id: int
    :param account_id: The account identifier
    :type account_id: int
    :param vendor_id: The vendor identifier
    :type vendor_id: int
    :param needs_to_open_batch: Indicates if a new bill batch needs to be
     opened to place this bill in
    :type needs_to_open_batch: bool
    :param begin_date: The bill's begin date
    :type begin_date: datetime
    :param end_date: The bill's end date
    :type end_date: datetime
    :param billing_period: The bill's billing period
    :type billing_period: int
    :param days: The bill's number of days
    :type days: int
    :param total_cost: The bill's total cost
    :type total_cost: float
    :param due_date:
    :type due_date: ~energycap.sdk.models.BillHeaderChild
    :param statement_date:
    :type statement_date: ~energycap.sdk.models.BillHeaderChild
    :param invoice_number:
    :type invoice_number: ~energycap.sdk.models.BillHeaderChild
    :param control_code:
    :type control_code: ~energycap.sdk.models.BillHeaderChild
    :param next_reading:
    :type next_reading: ~energycap.sdk.models.BillHeaderChild
    :param account_period_name:
    :type account_period_name: ~energycap.sdk.models.BillHeaderChild
    :param account_period_number:
    :type account_period_number: ~energycap.sdk.models.BillHeaderChild
    :param account_period_year:
    :type account_period_year: ~energycap.sdk.models.BillHeaderChild
    :param estimated:
    :type estimated: ~energycap.sdk.models.BillHeaderChild
    :param bill_note: The bill's note
    :type bill_note: str
    :param void: Indicates if the bill has been voided
    :type void: bool
    :param from_vendor: Indicates if the bill is from a vendor
    :type from_vendor: bool
    :param observation_method:
    :type observation_method: ~energycap.sdk.models.ObservationMethodChild
    :param approved: Indicates if the bill has been approved
    :type approved: bool
    :param has_been_split: Indicates if the bill has been split
    :type has_been_split: bool
    :param export_hold: Indicates if the bill is being withheld from bill
     exports
    :type export_hold: bool
    :param ap_exported: Indicates if the bill has been ap exported
    :type ap_exported: bool
    :param gl_exported: Indicates if the bill has been gl exported
    :type gl_exported: bool
    :param accrual: Indicates if the bill is an accrual bill
    :type accrual: bool
    :param check_number: The number of the check that the bill was paid with
    :type check_number: str
    :param check_date: The date and time of the check
    :type check_date: datetime
    :param pay_status: The payment status of the bill
    :type pay_status: str
    :param cleared_date: The date and time that the check cleared
    :type cleared_date: datetime
    :param bill_image_url: The fully qualified url to the bill image
    :type bill_image_url: str
    :param general_ledger_code: The general ledger code of the bill's
     account-level details ("Mixed" if there is more than one)
    :type general_ledger_code: str
    :param meters: The billing account's meters
    :type meters: list[~energycap.sdk.models.BillEntryMeterChild]
    :param account_body_lines: The bill's account-level details
    :type account_body_lines: list[~energycap.sdk.models.BillEntryBodyLine]
    """

    _attribute_map = {
        'bill_id': {'key': 'billId', 'type': 'int'},
        'account_id': {'key': 'accountId', 'type': 'int'},
        'vendor_id': {'key': 'vendorId', 'type': 'int'},
        'needs_to_open_batch': {'key': 'needsToOpenBatch', 'type': 'bool'},
        'begin_date': {'key': 'beginDate', 'type': 'iso-8601'},
        'end_date': {'key': 'endDate', 'type': 'iso-8601'},
        'billing_period': {'key': 'billingPeriod', 'type': 'int'},
        'days': {'key': 'days', 'type': 'int'},
        'total_cost': {'key': 'totalCost', 'type': 'float'},
        'due_date': {'key': 'dueDate', 'type': 'BillHeaderChild'},
        'statement_date': {'key': 'statementDate', 'type': 'BillHeaderChild'},
        'invoice_number': {'key': 'invoiceNumber', 'type': 'BillHeaderChild'},
        'control_code': {'key': 'controlCode', 'type': 'BillHeaderChild'},
        'next_reading': {'key': 'nextReading', 'type': 'BillHeaderChild'},
        'account_period_name': {'key': 'accountPeriodName', 'type': 'BillHeaderChild'},
        'account_period_number': {'key': 'accountPeriodNumber', 'type': 'BillHeaderChild'},
        'account_period_year': {'key': 'accountPeriodYear', 'type': 'BillHeaderChild'},
        'estimated': {'key': 'estimated', 'type': 'BillHeaderChild'},
        'bill_note': {'key': 'billNote', 'type': 'str'},
        'void': {'key': 'void', 'type': 'bool'},
        'from_vendor': {'key': 'fromVendor', 'type': 'bool'},
        'observation_method': {'key': 'observationMethod', 'type': 'ObservationMethodChild'},
        'approved': {'key': 'approved', 'type': 'bool'},
        'has_been_split': {'key': 'hasBeenSplit', 'type': 'bool'},
        'export_hold': {'key': 'exportHold', 'type': 'bool'},
        'ap_exported': {'key': 'apExported', 'type': 'bool'},
        'gl_exported': {'key': 'glExported', 'type': 'bool'},
        'accrual': {'key': 'accrual', 'type': 'bool'},
        'check_number': {'key': 'checkNumber', 'type': 'str'},
        'check_date': {'key': 'checkDate', 'type': 'iso-8601'},
        'pay_status': {'key': 'payStatus', 'type': 'str'},
        'cleared_date': {'key': 'clearedDate', 'type': 'iso-8601'},
        'bill_image_url': {'key': 'billImageUrl', 'type': 'str'},
        'general_ledger_code': {'key': 'generalLedgerCode', 'type': 'str'},
        'meters': {'key': 'meters', 'type': '[BillEntryMeterChild]'},
        'account_body_lines': {'key': 'accountBodyLines', 'type': '[BillEntryBodyLine]'},
    }

    def __init__(self, bill_id=None, account_id=None, vendor_id=None, needs_to_open_batch=None, begin_date=None, end_date=None, billing_period=None, days=None, total_cost=None, due_date=None, statement_date=None, invoice_number=None, control_code=None, next_reading=None, account_period_name=None, account_period_number=None, account_period_year=None, estimated=None, bill_note=None, void=None, from_vendor=None, observation_method=None, approved=None, has_been_split=None, export_hold=None, ap_exported=None, gl_exported=None, accrual=None, check_number=None, check_date=None, pay_status=None, cleared_date=None, bill_image_url=None, general_ledger_code=None, meters=None, account_body_lines=None):
        super(BillEntryResponse, self).__init__()
        self.bill_id = bill_id
        self.account_id = account_id
        self.vendor_id = vendor_id
        self.needs_to_open_batch = needs_to_open_batch
        self.begin_date = begin_date
        self.end_date = end_date
        self.billing_period = billing_period
        self.days = days
        self.total_cost = total_cost
        self.due_date = due_date
        self.statement_date = statement_date
        self.invoice_number = invoice_number
        self.control_code = control_code
        self.next_reading = next_reading
        self.account_period_name = account_period_name
        self.account_period_number = account_period_number
        self.account_period_year = account_period_year
        self.estimated = estimated
        self.bill_note = bill_note
        self.void = void
        self.from_vendor = from_vendor
        self.observation_method = observation_method
        self.approved = approved
        self.has_been_split = has_been_split
        self.export_hold = export_hold
        self.ap_exported = ap_exported
        self.gl_exported = gl_exported
        self.accrual = accrual
        self.check_number = check_number
        self.check_date = check_date
        self.pay_status = pay_status
        self.cleared_date = cleared_date
        self.bill_image_url = bill_image_url
        self.general_ledger_code = general_ledger_code
        self.meters = meters
        self.account_body_lines = account_body_lines
