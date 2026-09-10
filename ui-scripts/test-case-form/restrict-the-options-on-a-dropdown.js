// Recipe: Restrict the options on a dropdown
// Surface: Test Case Form
// TM.constrainOptions limits a dropdown, a multi-select, or a nested field to the labels you list.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFormLoad('test_case_form', function () {
  TM.constrainOptions('Target Region', ['EMEA', 'APAC']);
});
