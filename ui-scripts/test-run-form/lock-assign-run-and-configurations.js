// Recipe: Lock Assign Run and Configurations
// Surface: Test Run Form
// Disable the Assign Run and Configurations fields when the form opens.

TM.onFormLoad('test_run_form', function () {
  TM.setFieldReadOnly('owner', true); // Assign Run disabled
  TM.setFieldReadOnly('configurations', true); // Configurations disabled
});
