// Recipe: Make an optional field required
// Surface: Test Case Form
// The field gains a required marker and blocks the save while it is empty.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFormLoad('test_case_form', function () {
  TM.setFieldRequired('Target Region', true);
});
