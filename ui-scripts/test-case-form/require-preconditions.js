// Recipe: Require preconditions
// Surface: Test Case Form
// Preconditions holds rich text, so the rule reads its text before it tests for emptiness.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_case_form', function (form) {
  // Let the browser parse the markup and read the text back, instead of stripping the tags
  // with a regular expression, which leaves an unterminated tag such as '<script src=x'
  // untouched. parseFromString only builds a document, so it never runs the markup.
  var parsed = new DOMParser().parseFromString(String(form.preconditions || ''), 'text/html');
  var text = (parsed.body.textContent || '').trim();
  if (!text) {
    return TM.blockSave('Preconditions are required.', 'Preconditions');
  }
});
