const CREATE_FOLDER_NAME = "Dummy folder name created by Pactum JS";
const CREATE_FOLDER_NOTES = "Dummy folder notes created by Pactum JS";
const EDIT_FOLDER_NAME = "Dummy folder name edited by Pactum JS";
const EDIT_FOLDER_NOTES = "Dummy folder notes edited by Pactum JS";
const CREATE_SUBFOLDER_NAME = "Dummy sub-folder name created by Pactum JS";
const CREATE_SUBFOLDER_NOTES = "Dummy sub-folder notes created by Pactum JS";

let folderConstant = {
  GET_ROOT_FOLDERS: "/api/v1/projects/:project_id/repository",
  GET_FOLDER_BY_ID: "/api/v1/projects/:project_id/folder/:folder_id",
  CREATE_ROOT_FOLDER: "/api/v1/projects/:project_id/repository/mkdir",
  EDIT_ROOT_FOLDER: "/api/v1/projects/:project_id/folder/:folder_id/rename",
  CREATE_SUB_FOLDER: "/api/v1/projects/:project_id/folder/:folder_id/mkdir",
  COPY_MOVE_FOLDER: "/api/v1/projects/:project_id/folder/:folder_id/mv",
  DELETE_FOLDER: "/api/v1/projects/:project_id/folder/:folder_id/rm",
  CREATE_FOLDER_NAME: CREATE_FOLDER_NAME,
  CREATE_FOLDER_NOTES: CREATE_FOLDER_NOTES,
  EDIT_FOLDER_NAME: EDIT_FOLDER_NAME,
  EDIT_FOLDER_NOTES: EDIT_FOLDER_NOTES,
  CREATE_SUBFOLDER_NAME: CREATE_SUBFOLDER_NAME,
  CREATE_SUBFOLDER_NOTES: CREATE_SUBFOLDER_NOTES,
};

let folderResponseBody = {
  CREATE_ROOT_FOLDER_RESPONSE: {
    data: {
      success: true,
      folder: {
        id: "#number",
        name: "#string",
        ui_position: null,
        notes: "#string",
        links: {
          self: "#string",
        },
        sub_folders_count: "#number",
      },
    },
  },
  GET_ROOT_FOLDERS_RESPONSE: {
    folders: [
      {
        id: "#number",
        name: "#string",
        ui_position: null,
        notes: "#string",
        links: {
          self: "#string",
        },
        sub_folders_count: "#number",
      },
    ],
    success: "#boolean",
    test_cases: [],
  },
  GET_FOLDER_BY_ID_NO_TC_RESPONSE: {
    folders: [
      {
        id: "#number",
        name: "#string",
        ui_position: null,
        notes: "#string_or_null",
        links: {
          self: "#string",
        },
        sub_folders_count: "#number",
      },
    ],
    self: {
      id: "#number",
      name: "#string",
      ui_position: "#number_or_null",
      notes: "#string_or_null",
      links: {
        self: "#string",
      },
      sub_folders_count: "#number",
    },
    parent_id: null,
    ancestors: null,
    test_cases: [],
    success: true,
  },
  DELETE_FOLDER_RESPONSE: {
    data: {
      success: "#boolean",
      folder: {
        id: "#number",
        name: "#string",
        ui_position: "#number_or_null",
        notes: "#string_or_null",
        links: {
          self: "#string",
        },
        sub_folders_count: "#number",
        is_automation: "#boolean",
        project_id: "#number",
      },
    },
  },
  GET_FOLDER_BY_ID_TC_RESPONSE: {
    folders: [
      {
        id: "#number",
        name: "#string",
        ui_position: null,
        notes: "#string_or_null",
        links: {
          self: "#string",
        },
        sub_folders_count: "#number",
      },
    ],
    self: {
      id: "#number",
      name: "#string",
      ui_position: "#number_or_null",
      notes: "#string_or_null",
      links: {
        self: "#string",
      },
      sub_folders_count: "#number",
    },
    parent_id: null,
    ancestors: null,
    test_cases: [
      {
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
        description: null,
        estimate: null,
        template: "#string",
        updated_at: "#string",
        expected_result: null,
        test_runs_count: "#number",
        steps: [],
        case_type: "#string",
        preconditions: null,
        test_case_folder_id: "#number",
        project_id: "#number",
        owner: null,
        tags: [],
        assignee: null,
      },
    ],
    success: true,
  },
};

module.exports.folderConstant = folderConstant;
module.exports.folderResponseBody = folderResponseBody;
