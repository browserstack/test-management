// Recipe: Lock a field on the session form
// Surface: Exploratory Session Form
// Disable a custom field when the form opens. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

TM.onFormLoad('exploratory_session_form', function () { TM.setFieldReadOnly('UIS Integer', true); });
