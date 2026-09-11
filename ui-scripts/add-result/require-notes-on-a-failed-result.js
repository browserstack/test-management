// Recipe: Require Notes on a Failed result
// Surface: Add Result and Update Result (select both)
// A tester should not be able to log a Failed result without explaining the failure.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('add_result', function (formState) {
  var isEmptyRichText = function (html) {
    if (!html) return true;

    // Let the browser parse the markup and read the text back, instead of stripping the
    // tags with a regular expression. A regex leaves an unterminated tag such as
    // '<script src=x' untouched, and parsing decodes entities such as &nbsp; for you.
    // parseFromString only builds a document, so it never runs the markup it is given.
    var parsed = new DOMParser().parseFromString(String(html), 'text/html');
    var text = (parsed.body.textContent || '').replace(/\s+/g, '');
    return text.length === 0;
  };

  if (formState.status.label === 'Failed' && isEmptyRichText(formState.notes)) {
    return TM.blockSave('Notes are required when the result is Failed.');
  }
});
