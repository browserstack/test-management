// Recipe: Require a test plan when the title says Automatable
// Surface: Test Run Form
// Type Automatable anywhere in the run name and the Test Plan field becomes required. Remove the word and the requirement clears.

TM.onFieldChange('title', function (val) {
  var v = (val && val.value !== undefined) ? val.value : (val || '');
  TM.setFieldRequired('testPlans', String(v).toLowerCase().indexOf('automatable') >= 0);
});
