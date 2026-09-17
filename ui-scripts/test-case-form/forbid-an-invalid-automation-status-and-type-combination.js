// Recipe: Forbid an invalid Automation Status and Type combination
// Surface: Test Case Form
// Both fields are system fields, so both comparisons use internal_name.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('test_case_form', function (form) {
  var automation = form.automationStatus && form.automationStatus.internal_name;
  var caseType = form.caseType && form.caseType.internal_name;
  if (automation === 'automated' && caseType === 'other') {
    return TM.blockSave('An automated test case cannot have the type Other.');
  }
});
