// Recipe: Require a dropdown when a checkbox is on
// Surface: Test Plan Form
// Toggle the boolean field on and the dropdown becomes required. Toggle it off and the requirement clears. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

TM.onFieldChange('UIS Boolean', function (val) {
  TM.setFieldRequired('UIS Dropdown', (val === true || val === 'true'));
});
