const { handler } = require("pactum");
const { constants } = require("../constants/common_constant");
const { projectConstant } = require("../constants/project_constant");
const { folderConstant } = require("../constants/folder_constant");
const { testcaseConstant } = require("../constants/testcase_constant");

// PROJECTS
handler.addDataFuncHandler("CreateProjectPayload", () => {
  return {
    name: projectConstant.CREATE_PROJECT_NAME,
    description: projectConstant.CREATE_PROJECT_DESCRIPTION,
  };
});

handler.addDataFuncHandler("EditProjectPayload", () => {
  return {
    name: projectConstant.EDIT_PROJECT_NAME,
    description: projectConstant.EDIT_PROJECT_DESCRIPTION,
  };
});

// FOLDERS
handler.addDataFuncHandler("CreateFolderPayload", () => {
  return {
    name: folderConstant.CREATE_FOLDER_NAME,
    notes: folderConstant.CREATE_FOLDER_NOTES,
  };
});

handler.addDataFuncHandler("EditFolderPayload", () => {
  return {
    name: folderConstant.EDIT_FOLDER_NAME,
    notes: folderConstant.EDIT_FOLDER_NOTES,
  };
});

handler.addDataFuncHandler("CreateSubFolderPayload", () => {
  return {
    name: folderConstant.CREATE_SUBFOLDER_NAME,
    notes: folderConstant.CREATE_SUBFOLDER_NOTES,
  };
});

handler.addDataFuncHandler("MoveFolderPayload", (ctx) => {
  requestBody = ctx.args[0]
    ? { new_base_folder_id: ctx.args[0], user_action: "move_folder" }
    : { user_action: "move_folder" };
  return requestBody;
});

// TESTCASES
handler.addDataFuncHandler("TestCasePayload", (ctx) => {
  if (ctx.args[0] === "TestCase_Description")
    return {
      name: testcaseConstant.CREATE_TESTCASE_DESCRIPTION_NAME,
      description: testcaseConstant.CREATE_TESTCASE_DESCRIPTION_DETAILS,
      owner: 55670,
    };
  else if (ctx.args[0] === "TestCase_Text_Steps_Results")
    return {
      name: testcaseConstant.CREATE_TESTCASE_TEXT_STEPS_RESULTS_NAME,
      description: testcaseConstant.CREATE_TESTCASE_DESCRIPTION_DETAILS,
      steps: testcaseConstant.CREATE_TESTCASE_TEXT_STEPS,
      expected_result: testcaseConstant.CREATE_TESTCASE_TEXT_RESULTS,
      owner: 55670,
    };
  else if (ctx.args[0] === "TestCase_Steps")
    return {
      name: testcaseConstant.CREATE_TESTCASE_STEPS_NAME,
      description: testcaseConstant.CREATE_TESTCASE_DESCRIPTION_DETAILS,
      template: "test_case_steps",
      steps: testcaseConstant.CREATE_TESTCASE_STEPS,
      owner: 55670,
    };
  else if (ctx.args[0] === "TestCase_Text_Show_More_Fields")
    return {
      name: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_NAME,
      description: testcaseConstant.CREATE_TESTCASE_DESCRIPTION_DETAILS,
      steps: testcaseConstant.CREATE_TESTCASE_TEXT_STEPS,
      expected_result: testcaseConstant.CREATE_TESTCASE_TEXT_RESULTS,
      case_type: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC,
      preconditions:
        testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS,
      priority: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_PRIORITY,
      status: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_STATE,
      tags: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_TAGS,
      owner: 55670,
    };
  else if (ctx.args[0] === "TestCase_Steps_Show_More_Fields")
    return {
      name: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_NAME,
      description: testcaseConstant.CREATE_TESTCASE_DESCRIPTION_DETAILS,
      template: "test_case_steps",
      steps: testcaseConstant.CREATE_TESTCASE_STEPS,
      case_type: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC,
      preconditions:
        testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS,
      priority: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_PRIORITY,
      status: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_STATE,
      tags: testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_TAGS,
      owner: 55670,
    };
  else
    return {
      name: testcaseConstant.CREATE_TESTCASE_NAME,
      owner: 55670,
    };
});

handler.addDataFuncHandler("EditTestCasePayload", (ctx) => {
  if (ctx.args[0] === "Edit_TestCase_Description")
    return {
      name: `Edit ${testcaseConstant.CREATE_TESTCASE_DESCRIPTION_NAME}`,
      description: testcaseConstant.EDIT_TESTCASE_DESCRIPTION_DETAILS,
      owner: 55670,
    };
  else if (ctx.args[0] === "Edit_TestCase_Text_Steps_Results")
    return {
      name: `Edit ${testcaseConstant.CREATE_TESTCASE_TEXT_STEPS_RESULTS_NAME}`,
      description: testcaseConstant.EDIT_TESTCASE_DESCRIPTION_DETAILS,
      steps: testcaseConstant.EDIT_TESTCASE_TEXT_STEPS,
      expected_result: testcaseConstant.EDIT_TESTCASE_TEXT_RESULTS,
      owner: 55670,
    };
  else if (ctx.args[0] === "Edit_TestCase_Steps")
    return {
      name: `Edit ${testcaseConstant.CREATE_TESTCASE_STEPS_NAME}`,
      description: testcaseConstant.EDIT_TESTCASE_DESCRIPTION_DETAILS,
      template: "test_case_steps",
      steps: testcaseConstant.EDIT_TESTCASE_STEPS,
      owner: 55670,
    };
  else if (ctx.args[0] === "Edit_TestCase_Text_Show_More_Fields")
    return {
      name: `Edit ${testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_NAME}`,
      description: testcaseConstant.EDIT_TESTCASE_DESCRIPTION_DETAILS,
      steps: testcaseConstant.EDIT_TESTCASE_TEXT_STEPS,
      expected_result: testcaseConstant.EDIT_TESTCASE_TEXT_RESULTS,
      case_type: testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC,
      preconditions:
        testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS,
      priority: testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_PRIORITY,
      status: testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_STATE,
      tags: testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_TAGS,
      owner: 55670,
    };
  else if (ctx.args[0] === "Edit_TestCase_Steps_Show_More_Fields")
    return {
      name: `Edit ${testcaseConstant.CREATE_TESTCASE_SHOW_MORE_FIELDS_NAME}`,
      description: testcaseConstant.EDIT_TESTCASE_DESCRIPTION_DETAILS,
      template: "test_case_steps",
      steps: testcaseConstant.EDIT_TESTCASE_STEPS,
      case_type: testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC,
      preconditions:
        testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS,
      priority: testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_PRIORITY,
      status: testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_STATE,
      tags: testcaseConstant.EDIT_TESTCASE_SHOW_MORE_FIELDS_TAGS,
      owner: 55670,
    };
  else
    return {
      name: `Edit ${testcaseConstant.CREATE_TESTCASE_NAME}`,
      owner: 55670,
    };
});
