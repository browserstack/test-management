// Recipe: Require at least one non-empty step
// Surface: Test Case Form
// Each step item exposes its instruction as s.step. Steps cannot show an inline error, so this message appears in the message strip.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_case_form', function (form) {
  var items = (form.steps && form.steps.items) || [];
  var hasStep = items.some(function (s) {
    return s && s.step && String(s.step).trim();
  });
  if (!hasStep) {
    return TM.blockSave('At least one non-empty step is required.');
  }
});
