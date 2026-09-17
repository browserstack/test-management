// Recipe: Show or hide fields on the session form
// Surface: Exploratory Session Form
// Hide one custom field when the form opens, and hide another while a boolean field is on. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

// Static hide on load:
TM.onFormLoad('exploratory_session_form', function () { TM.setFieldVisible('UIS Url', false); });

// Conditional hide (UIS MultiSel hidden while UIS Boolean is ON):
TM.onFieldChange('UIS Boolean', function (val) {
  TM.setFieldVisible('UIS MultiSel', !(val === true || val === 'true'));
});
