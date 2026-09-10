// Recipe: Show a field only when Priority is Critical
// Surface: Test Case Form
// A conditional rule needs two triggers. onFormLoad applies it to the form as it opens, and onFieldChange reapplies it every time Priority changes.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

function applyRegionVisibility(priority) {
  var value = priority && (priority.internal_name || priority);
  TM.setFieldVisible('Target Region', value === 'critical');
}

TM.onFormLoad('test_case_form', function (form) {
  applyRegionVisibility(form.priority);
});

TM.onFieldChange('priority', function (value) {
  applyRegionVisibility(value);
});
