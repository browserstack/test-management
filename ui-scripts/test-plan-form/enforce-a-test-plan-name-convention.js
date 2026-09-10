// Recipe: Enforce a test plan name convention
// Surface: Test Plan Form
// Block the save unless the test plan title starts with [TP]. The error renders inline under the title.

TM.onBeforeSave('test_plan_form', function (form) {
  if (!/^\[TP\]/.test(form.title || '')) {
    return TM.blockSave('Title must start with [TP]', 'title');
  }
});
