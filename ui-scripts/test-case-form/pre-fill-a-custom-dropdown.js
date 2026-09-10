// Recipe: Pre-fill a custom dropdown
// Surface: Test Case Form
// On a custom dropdown, TM.setFieldValue takes an option object shaped as { value, label }.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFormLoad('test_case_form', function () {
  TM.setFieldValue('Target Region', { value: 'EMEA', label: 'EMEA' });
});
