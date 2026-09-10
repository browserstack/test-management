// Recipe: File a pre-filled bug in your tracker
// Surface: Test Case Results Toolbar
// One click opens your tracker's create-issue page with the title, steps, expected result, and actual result already filled in.
// Docs: https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples

var allowedProjects = [<YOUR_PROJECT_IDS>];
var folderMapping = {
  "<YOUR_PROJECT_ID>": [{ value: "<YOUR_QUEUE_ID>", label: "<YOUR_QUEUE_NAME>" }]
};

TM.addButton('test_case_results_toolbar', { label: '1-Click Bug' });

TM.onButtonClick('1-Click Bug', function (context) {
  if (allowedProjects.indexOf(context.projectId) === -1) return;

  var steps = '';
  var expected = 'N/A';
  if (context.testCaseSteps && context.testCaseSteps.length > 0) {
    context.testCaseSteps.forEach(function (s) {
      steps += '\n' + s.number + '. ' + (s.content || '');
    });
    var last = context.testCaseSteps[context.testCaseSteps.length - 1];
    expected = (last && last.expected) || 'N/A';
  }

  var description = '**Test Case:** ' + (context.testCaseTitle || 'N/A');
  description += '\n**Preconditions:** ' + (context.testCasePreconditions || 'N/A');
  description += '\n**Repro Steps:** ' + (steps || 'N/A');
  description += '\n**Expected:** ' + expected;
  description += '\n**Actual:** ' + (context.latestResultComment || 'N/A');

  var folders = folderMapping[String(context.projectId)] ||
    [{ value: 'default', label: 'Default' }];

  TM.openDialog({
    title: 'File a bug',
    size: 'large',
    content: TM.ui.Stack({ gap: 4 }, [
      TM.ui.TextField({ name: 'title', label: 'Title', required: true }),
      TM.ui.TextArea({ name: 'description', label: 'Description', rows: 12, defaultValue: description }),
      TM.ui.Select({ name: 'folder', label: 'Queue', options: folders }),
      TM.ui.Divider(),
      TM.ui.Row({ justify: 'end', gap: 2 }, [
        TM.ui.Button({ variant: 'white', action: 'cancel' }, 'Cancel'),
        TM.ui.Button({ variant: 'primary', action: 'submit' }, 'Create')
      ])
    ]),
    onSubmit: function (formData) {
      TM.openUrl('<YOUR_TRACKER_BASE_URL>/create' +
        '?title=' + encodeURIComponent(formData.title || '') +
        '&description=' + encodeURIComponent(formData.description || '') +
        '&queue=' + encodeURIComponent(formData.folder || ''));
      TM.closeDialog();
    }
  });
});
