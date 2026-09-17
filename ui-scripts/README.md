# UI Scripts for BrowserStack Test Management

A UI Script is JavaScript that an admin attaches to one or more surfaces in Test Management, such as the Create Test Case form or the result dialog. Every project member who opens that surface runs the script in their own browser, so one rule reaches everyone on the project.

This folder is the UI Script library. Each script is one `.js` file, in a folder named for the surface it runs on. The [UI Scripts documentation](https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts) explains the concepts, the [UI Script examples](https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/ui-script-examples) page describes what each surface hands your callback, and the [TM toolkit reference](https://www.browserstack.com/docs/test-management/advanced-features/ui-scripts/tm-toolkit-reference) describes every `TM` function the scripts use.

> **Warning:** Treat every script in this folder as a starting point. Test it in a sandbox project and confirm the behavior before you enable it on a production project.

## Who can add a UI Script

Only an admin can configure UI Scripts. You need an IAM role of **Owner** or **Admin**, or the **Product Admin** role in Test Management. Every other role can work in a project that already has UI Scripts, but cannot open the **UI Scripts** page or edit a script. For the full role breakdown, see [Role-Based Access Control](https://www.browserstack.com/docs/test-management/user-access-control).

## How to use a script

1. Open the `.js` file for the recipe you want. The comment at the top names the recipe, the surface to select, and what the script does.
2. Replace any placeholder token, such as `<YOUR_PROJECT_IDS>` or `<YOUR_TRACKER_BASE_URL>`, with your own value.
3. Swap the sample field names for the names your own project uses. Most scripts use names such as **Target Region** and **Automation Link**. The run, plan, and session scripts that came from an engineering test project use names such as **UIS String** and **UIS Boolean**.
4. In Test Management, create a new UI Script, paste the code, select the surface named in the header comment, and save.
5. Reload the app before you test. The script engine loads every active script once, when Test Management loads, so a script you create, edit, enable, disable, or delete takes effect on the next page load.

## Three rules to know before you enable a script

- **Return the block.** A save callback blocks the save only when it returns the result of `TM.blockSave`. A call without `return` does nothing and the save goes through.
- **Enabled scripts run together.** Every enabled script on a surface runs, in priority order, and stops at the first script that blocks a save. To test one script on its own, disable the others on that surface. The scripts named "Combine rules" already bundle several behaviors, so do not enable them alongside the single-rule scripts they contain.
- **Trigger on text or boolean fields.** On the run, plan, and session forms, a dropdown hands `TM.onFieldChange` its stored value rather than the visible label. A text or boolean field hands you exactly what the tester entered, so build conditional rules on those.

## Folder map

Each folder holds the scripts for one surface.

| Folder | Surface | Scripts |
| ------ | ------- | ------- |
| `add-result/` | Add Result and Update Result | 2 |
| `test-case-results-toolbar/` | Test Case Results Toolbar | 3 |
| `test-case-form/` | Test Case Form | 18 |
| `test-run-form/` | Test Run Form | 9 |
| `test-plan-form/` | Test Plan Form | 9 |
| `exploratory-session-form/` | Exploratory Session Form | 9 |

The scripts in `add-result/` register the `add_result` surface in code. Select both the Add Result and Update Result surfaces when you save the script, so the rule applies whether a tester logs a new result or edits an existing one.

### Add Result and Update Result

- `require-notes-on-a-failed-result.js`
- `require-a-linked-defect-on-a-failed-result.js`

### Test Case Results Toolbar

- `file-a-pre-filled-bug-in-your-tracker.js`
- `open-a-runbook-from-the-toolbar.js`
- `run-your-own-handler-from-a-dialog-button.js`

### Test Case Form

Validation:

- `enforce-a-title-naming-convention.js`
- `require-at-least-one-non-empty-step.js`
- `require-preconditions.js`
- `require-a-linked-requirement.js`
- `require-one-custom-field-based-on-another.js`
- `require-a-tag-on-critical-test-cases.js`
- `forbid-an-invalid-automation-status-and-type-combination.js`

Field behavior:

- `lock-a-field-against-editing.js`
- `hide-a-field.js`
- `pre-fill-a-custom-dropdown.js`
- `restrict-the-options-on-a-dropdown.js`
- `show-a-field-only-when-priority-is-critical.js`
- `require-a-field-when-automation-status-becomes-automated.js`
- `hide-or-lock-a-built-in-field.js`
- `make-an-optional-field-required.js`

Buttons and dialogs:

- `add-a-form-button-that-opens-a-dialog.js`
- `add-a-form-button-that-opens-a-link.js`
- `build-a-dialog-with-your-own-buttons.js`

### Test Run Form

- `enforce-a-run-name-convention.js`
- `require-a-test-plan-on-every-run.js`
- `require-a-test-plan-when-the-title-says-automatable.js`
- `require-a-field-when-the-title-marks-a-run-urgent.js`
- `show-or-hide-fields-on-the-run-form.js`
- `lock-assign-run-and-configurations.js`
- `pre-fill-defaults-when-a-form-opens.js`
- `set-several-field-behaviors-when-the-run-form-opens.js`
- `combine-rules-on-the-run-form.js`

### Test Plan Form

- `enforce-a-test-plan-name-convention.js`
- `require-a-linked-requirement-on-a-test-plan.js`
- `require-a-dropdown-when-a-text-field-says-automatable.js`
- `require-a-dropdown-when-a-checkbox-is-on.js`
- `show-or-hide-fields-on-the-test-plan-form.js`
- `lock-a-field-on-the-test-plan-form.js`
- `pre-fill-defaults-on-the-test-plan-form.js`
- `keep-the-end-date-after-the-start-date.js`
- `combine-rules-on-the-test-plan-form.js`

### Exploratory Session Form

- `enforce-a-session-name-convention.js`
- `require-a-linked-requirement-on-a-session.js`
- `require-a-dropdown-when-a-text-field-says-automatable.js`
- `require-a-dropdown-when-a-checkbox-is-on.js`
- `show-or-hide-fields-on-the-session-form.js`
- `lock-a-field-on-the-session-form.js`
- `pre-fill-defaults-on-the-session-form.js`
- `limit-the-session-timebox.js`
- `combine-rules-on-the-session-form.js`
