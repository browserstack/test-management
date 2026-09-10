// Recipe: Require a field when the title marks a run urgent
// Surface: Test Run Form
// This recipe watches the run name for the word URGENT.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFieldChange('title', function (value) {
  var text = (value && value.value !== undefined) ? value.value : (value || '');
  var urgent = String(text).indexOf('URGENT') >= 0;
  TM.setFieldRequired('tags', urgent);
  TM.setFieldVisible('configurations', !urgent);
});
