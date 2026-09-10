// Recipe: Show or hide fields on the run form
// Surface: Test Run Form
// Hide State and the Auto-assign checkbox when the form opens, and hide Configurations while the run name contains URGENT.

// Static hide on load:
TM.onFormLoad('test_run_form', function () {
  TM.setFieldVisible('state', false); // hide State
  TM.setFieldVisible('autoAssign', false); // hide the Auto-assign checkbox
});

// Conditional hide (Configurations hidden while the name contains "URGENT"):
TM.onFieldChange('title', function (val) {
  var v = (val && val.value !== undefined) ? val.value : (val || '');
  TM.setFieldVisible('configurations', String(v).indexOf('URGENT') < 0);
});
