// Recipe: Require preconditions
// Surface: Test Case Form
// Preconditions holds rich text, so the rule strips the tags before it tests for emptiness.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_case_form', function (form) {
  var text = String(form.preconditions || '').replace(/<[^>]*>/g, '').trim();
  if (!text) {
    return TM.blockSave('Preconditions are required.', 'Preconditions');
  }
});
