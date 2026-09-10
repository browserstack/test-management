// Recipe: Lock a field on the test plan form
// Surface: Test Plan Form
// Disable a custom field when the form opens. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

TM.onFormLoad('test_plan_form', function () { TM.setFieldReadOnly('UIS Integer', true); });
