// Recipe: Add a form button that opens a link
// Surface: Test Case Form
// TM.openUrl opens http and https addresses only and ignores every other scheme.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.addButton('test_case_form', { label: 'Open Docs' });

TM.onButtonClick('Open Docs', function () {
  TM.openUrl('https://www.browserstack.com/docs/test-management');
});
