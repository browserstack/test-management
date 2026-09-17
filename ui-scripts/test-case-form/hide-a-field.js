// Recipe: Hide a field
// Surface: Test Case Form
// TM.setFieldVisible(name, false) removes the field from the form entirely.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFormLoad('test_case_form', function () {
  TM.setFieldVisible('Target Region', false);
});
