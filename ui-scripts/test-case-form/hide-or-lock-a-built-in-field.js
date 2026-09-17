// Recipe: Hide or lock a built-in field
// Surface: Test Case Form
// Built-in fields are addressed by their form label.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFormLoad('test_case_form', function () {
  TM.setFieldReadOnly('Tags', true);
  TM.setFieldVisible('Preconditions', false);
  TM.setFieldVisible('Steps', false);
});
