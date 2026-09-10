// Recipe: Lock a field against editing
// Surface: Test Case Form
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFormLoad('test_case_form', function () {
  TM.setFieldReadOnly('Target Region', true);
});
