// Recipe: Require Notes on a Failed result
// Surface: Add Result and Update Result (select both)
// A tester should not be able to log a Failed result without explaining the failure.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('add_result', function (formState) {
  var isEmptyRichText = function (html) {
    if (!html) return true;
    var text = String(html)
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&[a-z]+;|&#\d+;/gi, '')
      .replace(/\s+/g, '')
      .trim();
    return text.length === 0;
  };

  if (formState.status.label === 'Failed' && isEmptyRichText(formState.notes)) {
    return TM.blockSave('Notes are required when the result is Failed.');
  }
});
