// Recipe: Combine rules on the test plan form
// Surface: Test Plan Form
// Require, hide, lock, and pre-fill custom fields on load, drive one field from another, and enforce the [TP] prefix in one script. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

// onFormLoad — fires once when the modal opens
TM.onFormLoad('test_plan_form', function (form) {
  TM.setFieldRequired('UIS String', true); // String CF shows the required *
  TM.setFieldVisible('UIS Url', false); // Url CF removed from the form
  TM.setFieldReadOnly('UIS Integer', true); // Integer CF input disabled
  TM.setFieldValue('UIS String', 'Prefilled'); // prefill (controlled fields render; RTE saves only)
});

// onFieldChange — conditional / bidirectional
// Toggle "UIS Boolean" ON -> Dropdown required, MultiSel hidden, Date read-only. OFF -> revert.
TM.onFieldChange('UIS Boolean', function (val) {
  var on = (val === true || val === 'true');
  TM.setFieldRequired('UIS Dropdown', on);
  TM.setFieldVisible('UIS MultiSel', !on);
  TM.setFieldReadOnly('UIS Date', on);
});

// onFieldChange on a standard field (title) driving a custom field
// Type "URGENT" anywhere in the Title -> UIS User becomes required.
TM.onFieldChange('title', function (val) {
  var v = (val && val.value !== undefined) ? val.value : (val || '');
  TM.setFieldRequired('UIS User', String(v).indexOf('URGENT') >= 0);
});

// onBeforeSave — block with a message (note the RETURN)
TM.onBeforeSave('test_plan_form', function (form) {
  if (!/^\[TP\]/.test(form.title || '')) {
    return TM.blockSave('Title must start with [TP]', 'title');
  }
});
