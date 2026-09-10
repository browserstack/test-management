// Recipe: Pre-fill defaults on the session form
// Surface: Exploratory Session Form
// Pre-fill the title, a 60 minute timebox, the charter in Description, and a custom field when the form opens. Custom field names such as UIS String and UIS Boolean come from a sample project. Swap in the names your own project uses.

TM.onFormLoad('exploratory_session_form', function () {
  TM.setFieldValue('title', '[ES] Ad-hoc exploratory session'); // standard field
  TM.setFieldValue('timebox', '60'); // 60 minutes
  TM.setFieldValue('description', 'Charter set by UI Script'); // standard RTE field
  TM.setFieldValue('UIS String', 'Auto-filled by policy'); // custom field
});
