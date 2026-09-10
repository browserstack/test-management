// Recipe: Keep the end date after the start date
// Surface: Test Plan Form
// A test plan with an end date before its start date breaks scheduling, so this rule makes the dates depend on each other.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFormLoad('test_plan_form', function () {
  TM.setFieldRequired('startDate', true);
  TM.setFieldReadOnly('endDate', true);
});

TM.onFieldChange('startDate', function (value) {
  TM.setFieldReadOnly('endDate', !value);
  TM.setFieldRequired('endDate', !!value);
});

TM.onBeforeSave('test_plan_form', function (form) {
  if (form.startDate && form.endDate && form.endDate < form.startDate) {
    return TM.blockSave('End date cannot be before the start date.', 'endDate');
  }
});
