// Recipe: Limit the session timebox
// Surface: Exploratory Session Form
// This rule keeps the session timebox between 1 and 480 minutes.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('exploratory_session_form', function (form) {
  var minutes = Number(form.timebox);
  if (!form.timebox || isNaN(minutes) || minutes < 1) {
    return TM.blockSave('Timebox must be at least 1 minute.', 'timebox');
  }
  if (minutes > 480) {
    return TM.blockSave('Timebox cannot exceed 480 minutes.', 'timebox');
  }
});
