// Recipe: Require one custom field based on another
// Surface: Test Case Form
// A custom dropdown arrives as { value, label } and carries no internal_name, so the rule compares label.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_case_form', function (form) {
  var region = form.fields && form.fields['Target Region'];
  var label = region && (region.label || region);
  var link = form.fields && form.fields['Automation Link'];
  if (label === 'EMEA' && !String(link || '').trim()) {
    return TM.blockSave(
      "Automation Link is required when Target Region is 'EMEA'.",
      'Automation Link'
    );
  }
});
