// Recipe: Open a runbook from the toolbar
// Surface: Test Case Results Toolbar
// A toolbar button can open any page you keep outside Test Management.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.addButton('test_case_results_toolbar', { label: 'Team Runbook' });

TM.onButtonClick('Team Runbook', function () {
  TM.openUrl('<YOUR_WIKI_BASE_URL>/qa-runbook');
});
