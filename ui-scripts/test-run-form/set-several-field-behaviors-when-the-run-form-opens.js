// Recipe: Set several field behaviors when the run form opens
// Surface: Test Run Form
// Mix required, read-only, hidden, and pre-filled fields inside one onFormLoad callback. A script-required field left empty blocks the save.

TM.onFormLoad('test_run_form', function () {
  TM.setFieldRequired('description', true); // description required
  TM.setFieldRequired('tags', true); // tags required (child field)
  TM.setFieldRequired('testPlans', true); // test plan required (child field)
  TM.setFieldRequired('runGroup', true); // run group required (if run groups enabled)
  TM.setFieldReadOnly('owner', true); // owner read-only
  TM.setFieldReadOnly('autoAssign', true); // checkbox disabled
  TM.setFieldVisible('state', false); // state hidden
  TM.setFieldVisible('configurations', false);// configurations hidden
  TM.setFieldValue('title', '[TR] Prefilled');// name prefilled
});
