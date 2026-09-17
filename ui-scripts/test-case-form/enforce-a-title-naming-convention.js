// Recipe: Enforce a title naming convention
// Surface: Test Case Form
// The error renders under the Title field. Change the regular expression to match your own convention.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_case_form', function (form) {
  if (!/^TC-/.test(form.title || '')) {
    return TM.blockSave("Title must start with 'TC-'.", 'Title');
  }
});
