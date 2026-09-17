// Recipe: Pre-fill defaults on the test plan form
// Surface: Test Plan Form
// Pre-fill two custom fields and the built-in Description when the form opens. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

TM.onFormLoad('test_plan_form', function () {
  TM.setFieldValue('UIS String', 'Auto-filled by policy');
  TM.setFieldValue('UIS Integer', '7');
  TM.setFieldValue('description', 'Default description set by UI Script'); // standard field
});
