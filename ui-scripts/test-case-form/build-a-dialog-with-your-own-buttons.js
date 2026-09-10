// Recipe: Build a dialog with your own buttons
// Surface: Test Case Form
// A dialog built from a content tree renders no footer, so you supply the buttons.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

TM.addButton('test_case_form', { label: 'Open Dialog' });

TM.onButtonClick('Open Dialog', function () {
  TM.openDialog({
    title: 'Dialog',
    content: TM.ui.Stack({ gap: 8 }, [
      TM.ui.Text({}, 'Pick an action'),
      TM.ui.TextField({ name: 'note', label: 'Note' }),
      TM.ui.Button({ action: 'stayOpen' }, 'Stays open'),
      TM.ui.Button({ variant: 'primary', action: 'done' }, 'Run and close')
    ])
  });
});

TM.onAction('done', function (data) {
  // Do your work with data.note, then close.
  TM.closeDialog();
});
