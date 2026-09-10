// Recipe: Require a linked requirement on a session
// Surface: Exploratory Session Form
// Block the save until at least one requirement is linked. The same shape works with testPlan to require a linked test plan.

TM.onBeforeSave('exploratory_session_form', function (form) {
  if (!form.requirements || form.requirements.length === 0) {
    return TM.blockSave('Link at least one requirement before saving', 'requirements'); // inline error on the Requirements field
  }
});
