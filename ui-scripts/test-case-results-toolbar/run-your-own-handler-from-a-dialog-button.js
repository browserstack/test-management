// Recipe: Run your own handler from a dialog button
// Surface: Test Case Results Toolbar
// Use this pattern whenever a dialog has to do work first and close afterwards.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.addButton('test_case_results_toolbar', { label: 'Triage Helper' });

TM.onButtonClick('Triage Helper', function () {
  TM.openDialog({
    title: 'Triage',
    content: TM.ui.Stack({ gap: 8 }, [
      TM.ui.Text({}, 'Add a triage note'),
      TM.ui.TextField({ name: 'note', label: 'Note' }),
      TM.ui.Button({ action: 'saveNote' }, 'Save note and close')
    ])
  });
});

TM.onAction('saveNote', function (data) {
  // data.note holds the TextField value. Do your work, then close.
  TM.closeDialog();
});
