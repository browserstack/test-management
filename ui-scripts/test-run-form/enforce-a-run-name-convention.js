// Recipe: Enforce a run name convention
// Surface: Test Run Form
// Every test run carries a prefix that your reports can group on.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_run_form', function (form) {
  if (!/^\[TR\]/.test(form.title || '')) {
    return TM.blockSave('Run name must start with [TR].', 'title');
  }
});
