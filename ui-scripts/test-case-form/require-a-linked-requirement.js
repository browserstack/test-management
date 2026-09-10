// Recipe: Require a linked requirement
// Surface: Test Case Form
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_case_form', function (form) {
  if (!form.requirements || form.requirements.length === 0) {
    return TM.blockSave('Link at least one requirement before saving.', 'Requirements');
  }
});
