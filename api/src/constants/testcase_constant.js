const CREATE_TESTCASE_NAME = "Test Case";

const CREATE_TESTCASE_DESCRIPTION_NAME = "Test Case with Description";
const CREATE_TESTCASE_DESCRIPTION_DETAILS = "<p>Test Case with Description</p>";
const EDIT_TESTCASE_DESCRIPTION_DETAILS =
  "<p>Edit Test Case with Description</p>";

const CREATE_TESTCASE_TEXT_STEPS_RESULTS_NAME =
  "Test Case with Template as Text and Steps, Results defined";
const CREATE_TESTCASE_TEXT_STEPS =
  '["<div>\\n<div>Test Case with Steps</div>\\n</div>"]';
const CREATE_TESTCASE_TEXT_RESULTS =
  "<div>\n<div>Test Case with Results</div>\n</div>";
const EDIT_TESTCASE_TEXT_STEPS =
  '["<div>\\n<div>Edit Test Case with Steps</div>\\n</div>"]';
const EDIT_TESTCASE_TEXT_RESULTS =
  "<div>\n<div>Edit Test Case with Results</div>\n</div>";

const CREATE_TESTCASE_STEPS_NAME = "Test Case with Template as Steps";
const CREATE_TESTCASE_STEPS =
  '[{"step":"<p>Test Case with Step 1</p>","expected_result":"<p>Test Case with Result 1</p>"},{"step":"<p>Test Case with Step 2</p>","expected_result":"<p>Test Case with Result 2</p>"},{"step":"<p>Test Case with Step 3</p>","expected_result":"<p>Test Case with Result 3</p>"}]';
const EDIT_TESTCASE_STEPS =
  '[{"step":"<p>Edit Test Case with Step 1</p>","expected_result":"<p>Edit Test Case with Result 1</p>"},{"step":"<p>Edit Test Case with Step 2</p>","expected_result":"<p>Edit Test Case with Result 2</p>"},{"step":"<p>Edit Test Case with Step 3</p>","expected_result":"<p>Edit Test Case with Result 3</p>"}]';

const CREATE_TESTCASE_SHOW_MORE_FIELDS_NAME = "Test Case with Show More Fields";
const CREATE_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC = "compatibility";
const EDIT_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC = "regression";
const CREATE_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS =
  "<div>\n<div>Test Case with Precondition</div>\n</div>";
const EDIT_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS =
  "<div>\n<div>Edit Test Case with Precondition</div>\n</div>";
const CREATE_TESTCASE_SHOW_MORE_FIELDS_PRIORITY = "critical";
const EDIT_TESTCASE_SHOW_MORE_FIELDS_PRIORITY = "low";
const CREATE_TESTCASE_SHOW_MORE_FIELDS_STATE = "in_review_status";
const EDIT_TESTCASE_SHOW_MORE_FIELDS_STATE = "rejected_status";
const CREATE_TESTCASE_SHOW_MORE_FIELDS_TAGS = ["tag1", "tag2", "tag3"];
const EDIT_TESTCASE_SHOW_MORE_FIELDS_TAGS = ["tag1", "tag2", "tag4"];

let testcaseConstant = {
  CREATE_TESTCASE: "/api/v1/projects/:project_id/folder/:folder_id/test-cases",
  EDIT_TESTCASE:
    "/api/v1/projects/:project_id/folder/:folder_id/test-cases/:testcase_id/edit",
  DELETE_TESTCASE:
    "/api/v1/projects/:project_id/folder/:folder_id/test-cases/:testcase_id/delete",
  CREATE_TESTCASE_NAME: CREATE_TESTCASE_NAME,
  CREATE_TESTCASE_DESCRIPTION_NAME: CREATE_TESTCASE_DESCRIPTION_NAME,
  CREATE_TESTCASE_DESCRIPTION_DETAILS: CREATE_TESTCASE_DESCRIPTION_DETAILS,
  EDIT_TESTCASE_DESCRIPTION_DETAILS: EDIT_TESTCASE_DESCRIPTION_DETAILS,
  CREATE_TESTCASE_TEXT_STEPS_RESULTS_NAME:
    CREATE_TESTCASE_TEXT_STEPS_RESULTS_NAME,
  CREATE_TESTCASE_TEXT_STEPS: CREATE_TESTCASE_TEXT_STEPS,
  CREATE_TESTCASE_TEXT_RESULTS: CREATE_TESTCASE_TEXT_RESULTS,
  EDIT_TESTCASE_TEXT_STEPS: EDIT_TESTCASE_TEXT_STEPS,
  EDIT_TESTCASE_TEXT_RESULTS: EDIT_TESTCASE_TEXT_RESULTS,
  CREATE_TESTCASE_STEPS_NAME: CREATE_TESTCASE_STEPS_NAME,
  CREATE_TESTCASE_STEPS: CREATE_TESTCASE_STEPS,
  EDIT_TESTCASE_STEPS: EDIT_TESTCASE_STEPS,
  CREATE_TESTCASE_SHOW_MORE_FIELDS_NAME: CREATE_TESTCASE_SHOW_MORE_FIELDS_NAME,
  CREATE_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC:
    CREATE_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC,
  EDIT_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC:
    EDIT_TESTCASE_SHOW_MORE_FIELDS_TYPE_OF_TC,
  CREATE_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS:
    CREATE_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS,
  EDIT_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS:
    EDIT_TESTCASE_SHOW_MORE_FIELDS_PRECONDITIONS,
  CREATE_TESTCASE_SHOW_MORE_FIELDS_PRIORITY:
    CREATE_TESTCASE_SHOW_MORE_FIELDS_PRIORITY,
  EDIT_TESTCASE_SHOW_MORE_FIELDS_PRIORITY:
    EDIT_TESTCASE_SHOW_MORE_FIELDS_PRIORITY,
  CREATE_TESTCASE_SHOW_MORE_FIELDS_STATE:
    CREATE_TESTCASE_SHOW_MORE_FIELDS_STATE,
  EDIT_TESTCASE_SHOW_MORE_FIELDS_STATE: EDIT_TESTCASE_SHOW_MORE_FIELDS_STATE,
  CREATE_TESTCASE_SHOW_MORE_FIELDS_TAGS: CREATE_TESTCASE_SHOW_MORE_FIELDS_TAGS,
  EDIT_TESTCASE_SHOW_MORE_FIELDS_TAGS: EDIT_TESTCASE_SHOW_MORE_FIELDS_TAGS,
};

let testcaseResponseBody = {
  CREATE_TESTCASE_RESPONSE: {
    data: {
      success: true,
      test_case: {
        id: "#number",
        name: "#string",
        priority: "#string",
        links: {
          self: "#string",
          detail: "#string",
          folder: "#string",
        },
        status: "#string",
        custom_fields: {},
        identifier: "#string",
        description: "#string_or_null",
        estimate: null,
        template: "#string",
        updated_at: "#string",
        expected_result: "#string_or_null",
        test_runs_count: "#number",
        steps: [],
        case_type: "#string",
        preconditions: "#string_or_null",
        test_case_folder_id: "#number",
        project_id: "#number",
        owner: "#number_or_null",
        tags: [],
        is_automation: false,
        assignee: {},
      },
      folder: {
        id: "#number",
        name: "#string",
        ui_position: null,
        notes: "#string",
        links: {
          self: "#string",
        },
        sub_folders_count: "#number",
        is_automation: false,
        project_id: "#number",
      },
      project: {
        id: "#number",
        name: "New project name created by Pactum JS",
        identifier: "#string",
      },
    },
  },
  EDIT_TESTCASE_RESPONSE: {
    data: {
      success: true,
      test_case: {
        id: "#number",
        name: "#string",
        priority: "#string",
        links: {
          self: "#string",
          detail: "#string",
          folder: "#string",
        },
        status: "#string",
        custom_fields: {},
        identifier: "#string",
        description: "#string_or_null",
        estimate: null,
        template: "#string",
        updated_at: "#string",
        expected_result: "#string_or_null",
        test_runs_count: "#number",
        steps: [],
        case_type: "#string",
        preconditions: "#string_or_null",
        test_case_folder_id: "#number",
        project_id: "#number",
        owner: "#number_or_null",
        tags: [],
        is_automation: false,
        assignee: {},
      },
    },
  },
  DELETE_TESTCASE_RESPONSE: {
    data: {
      success: true,
      "test-case": {
        id: "#number",
        name: "#string",
        priority: "#string",
        links: {
          self: "#string",
          detail: "#string",
          folder: "#string",
        },
        status: "#string",
        custom_fields: {},
        identifier: "#string",
        description: "#string_or_null",
        estimate: null,
        template: "#string",
        updated_at: "#string",
        expected_result: "#string_or_null",
        test_runs_count: "#number",
        steps: [],
        case_type: "#string",
        preconditions: "#string_or_null",
        test_case_folder_id: "#number",
        project_id: "#number",
        owner: "#number_or_null",
        tags: [],
        is_automation: false,
        assignee: {},
      },
    },
  },
};

module.exports.testcaseConstant = testcaseConstant;
module.exports.testcaseResponseBody = testcaseResponseBody;
