// Recipe: Require a field when Automation Status becomes Automated
// Surface: Test Case Form
// When the status becomes Automated, Automation Link gains a required marker. When it changes to anything else, the requirement clears.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFieldChange('automationStatus', function (value) {
  var status = value && (value.internal_name || value);
  TM.setFieldRequired('Automation Link', status === 'automated');
});
