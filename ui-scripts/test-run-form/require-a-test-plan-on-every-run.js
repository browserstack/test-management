// Recipe: Require a test plan on every run
// Surface: Test Run Form
// A run that belongs to no test plan is invisible in plan-level reporting, so block it at create time.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_run_form', function (form) {
  if (!form.testPlans || form.testPlans.length === 0) {
    return TM.blockSave('Link a Test Plan before creating the run.', 'testPlans');
  }
});
