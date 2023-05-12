const CREATE_PROJECT_NAME = "New project name created by Pactum JS";
const CREATE_PROJECT_DESCRIPTION =
  "New project description created by Pactum JS";
const EDIT_PROJECT_NAME = "Dummy project name edited by Pactum JS";
const EDIT_PROJECT_DESCRIPTION =
  "Dummy project description edited by Pactum JS";

let projectConstant = {
  GET_ALL_PROJECTS: "/api/v1/projects",
  GET_PROJECT_BY_ID: "/api/v1/projects/:project_id",
  EDIT_PROJECT_BY_ID: "/api/v1/projects/:project_id/edit",
  CREATE_NEW_PROJECT: "/api/v1/projects",
  DELETE_PROJECT_BY_ID: "/api/v1/projects/:project_id/delete",
  EDIT_PROJECT_NAME: EDIT_PROJECT_NAME,
  EDIT_PROJECT_DESCRIPTION: EDIT_PROJECT_DESCRIPTION,
  CREATE_PROJECT_NAME: CREATE_PROJECT_NAME,
  CREATE_PROJECT_DESCRIPTION: CREATE_PROJECT_DESCRIPTION,
};

let projectResponseBody = {
  GET_PROJECT_BY_ID_RESPONSE: {
    data: {
      success: true,
      project: {
        id: "#number",
        name: "#string",
        created_at: "#string",
        description: "#string",
        links: {
          self: "#string",
          repository: "#string",
          test_runs: "#string",
          users: "#string",
        },
        test_cases_count: "#number",
        test_runs_count: "#number",
        identifier: "#string",
        import_id: null,
      },
    },
  },
  GET_ALL_PROJECTS_RESPONSE: {
    projects: [
      {
        id: "#number",
        name: "#string",
        created_at: "#string",
        description: "#string",
        links: {
          self: "#string",
          repository: "#string",
          test_runs: "#string",
          users: "#string",
        },
        test_cases_count: "#number",
        test_runs_count: "#number",
        identifier: "#string",
        import_id: null,
      },
    ],
    success: true,
    info: {
      page: "#number",
      next: null,
      prev: null,
      count: "#number",
      page_size: "#number",
    },
  },
};

module.exports.projectConstant = projectConstant;
module.exports.projectResponseBody = projectResponseBody;
