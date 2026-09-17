// Recipe: Combine rules on the session form
// Surface: Exploratory Session Form
// Require Timebox, pre-fill the title, shape custom fields, drive Test Plan from URGENT in the title, and enforce the [ES] prefix in one script. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

// onFormLoad - fires once when the form opens
TM.onFormLoad('exploratory_session_form', function (form) {
  TM.setFieldRequired('timebox', true); // built-in Timebox shows the required *
  TM.setFieldValue('title', '[ES] '); // prefill the session title
  TM.setFieldRequired('UIS String', true); // a custom field, by display name
  TM.setFieldVisible('UIS Url', false); // hide a custom field
  TM.setFieldReadOnly('UIS Integer', true); // custom field input disabled
});

// onFieldChange - conditional / bidirectional (a text or boolean trigger is reliable)
// Toggle "UIS Boolean" ON -> Dropdown required, MultiSel hidden. OFF -> revert.
TM.onFieldChange('UIS Boolean', function (val) {
  var on = (val === true || val === 'true');
  TM.setFieldRequired('UIS Dropdown', on);
  TM.setFieldVisible('UIS MultiSel', !on);
});

// onFieldChange on a standard field (title) driving a standard field
// Type "URGENT" anywhere in the Title -> Test Plan becomes required.
TM.onFieldChange('title', function (val) {
  var v = (val && val.value !== undefined) ? val.value : (val || '');
  TM.setFieldRequired('testPlan', String(v).indexOf('URGENT') >= 0);
});

// onBeforeSave - block with a message (note the RETURN)
TM.onBeforeSave('exploratory_session_form', function (form) {
  if (!/^\[ES\]/.test(form.title || '')) {
    return TM.blockSave('Title must start with [ES]', 'title');
  }
});
