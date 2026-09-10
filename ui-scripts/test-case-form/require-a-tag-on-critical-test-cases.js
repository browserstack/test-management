// Recipe: Require a tag on Critical test cases
// Surface: Test Case Form
// Priority is a system field, so the rule compares internal_name.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_case_form', function (form) {
  if (form.priority && form.priority.internal_name === 'critical' &&
      (form.tags || []).length === 0) {
    return TM.blockSave('Critical test cases must have at least one tag.', 'Tags');
  }
});
