// Recipe: Pre-fill defaults when a form opens
// Surface: Test Run Form
// Pre-filled defaults spare every tester the same first two edits.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onFormLoad('test_run_form', function () {
  TM.setFieldValue('title', '[TR] Nightly regression');
  TM.setFieldValue('description', 'Created under the release policy.');
});
