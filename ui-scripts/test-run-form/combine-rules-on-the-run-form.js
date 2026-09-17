// Recipe: Combine rules on the run form
// Surface: Test Run Form
// Pre-fill the run name, require Description, lock Assign Run, hide State, react to URGENT in the title, and enforce the [TR] prefix in one script.

// onFormLoad — fires once when the form opens
TM.onFormLoad('test_run_form', function (form) {
  TM.setFieldValue('title', '[TR] Prefilled by script'); // prefill the run name
  TM.setFieldRequired('description', true); // Description shows the required *
  TM.setFieldReadOnly('owner', true); // Assign Run disabled
  TM.setFieldVisible('state', false); // State field removed from the form
});

// onFieldChange — reactive / bidirectional
// Type "URGENT" anywhere in the run name -> Tags becomes required AND Configurations hides.
// Remove it -> both revert.
TM.onFieldChange('title', function (val) {
  var v = (val && val.value !== undefined) ? val.value : (val || '');
  var urgent = String(v).indexOf('URGENT') >= 0;
  TM.setFieldRequired('tags', urgent);
  TM.setFieldVisible('configurations', !urgent);
});

// onBeforeSave — block with a message (note the RETURN)
TM.onBeforeSave('test_run_form', function (form) {
  if (!/^\[TR\]/.test(form.title || '')) {
    return TM.blockSave('Run name must start with [TR]', 'title');
  }
});
