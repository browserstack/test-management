// Recipe: Require a dropdown when a text field says Automatable
// Surface: Exploratory Session Form
// A text field is a reliable trigger because its value is exactly what the tester types. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

TM.onFieldChange('UIS String', function (val) {
  var v = (val && val.value !== undefined) ? val.value : (val || '');
  TM.setFieldRequired('UIS Dropdown', String(v).toLowerCase().indexOf('automatable') >= 0);
});
