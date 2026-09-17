// Recipe: Require a linked requirement on a test plan
// Surface: Test Plan Form
// Block the save until at least one requirement is linked. The error renders inline under the Requirements field.

TM.onBeforeSave('test_plan_form', function (form) {
  if (!form.requirements || form.requirements.length === 0) {
    return TM.blockSave('Link at least one requirement before saving', 'requirements'); // inline error on the Requirements field
  }
});
