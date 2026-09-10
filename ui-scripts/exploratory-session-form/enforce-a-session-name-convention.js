// Recipe: Enforce a session name convention
// Surface: Exploratory Session Form
// Block the save unless the session title starts with [ES]. The error renders inline under the title.

TM.onBeforeSave('exploratory_session_form', function (form) {
  if (!/^\[ES\]/.test(form.title || '')) {
    return TM.blockSave('Title must start with [ES]', 'title');
  }
});
