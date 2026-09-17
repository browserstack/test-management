// Recipe: Add a form button that opens a dialog
// Surface: Test Case Form
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.addButton('test_case_form', { label: 'Helper' });

TM.onButtonClick('Helper', function () {
  TM.openDialog({
    title: 'Helper',
    content: TM.ui.Stack({ gap: 4 }, [
      TM.ui.Text({}, 'Hello from a UI Script'),
      TM.ui.Row({ justify: 'end' }, [
        TM.ui.Button({ variant: 'primary', action: 'cancel' }, 'OK')
      ])
    ])
  });
});
