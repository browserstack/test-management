// Recipe: Require a linked defect on a Failed result
// Surface: Add Result and Update Result (select both)
// A Failed result should point at the defect it produced.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.onBeforeSave('add_result', function (formState) {
  if (formState.status.label === 'Failed' &&
      (!formState.defects || formState.defects.length === 0)) {
    return TM.blockSave('Link at least one defect when the result is Failed.');
  }
});
