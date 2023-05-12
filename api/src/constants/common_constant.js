let constants = {
  // PRODUCTION
  TCM_PROD: {
    URL: "https://test-management.browserstack.com",
    COOKIE: "235ceb0275e0f0effe8d565e662074ce", // tm_production_regression_api@1secmail.com
  },

  // STAGING
  TCM_STAG: {
    URL: "https://test-management.bsstag.com",
    COOKIE: "", // tm_staging_regression_api@bsstag.com
  },
};

let tcmSpec = {
  GET_SPEC: [
    // PROJECTS
    "make a get request to /api/v1/projects endpoint to get all projects", // GET_ALL_PROJECTS
    "make a get request to /api/v1/projects/:project_id endpoint to get project by id", // GET_PROJECT_BY_ID

    // FOLDERS
    "make a get request to /api/v1/projects/:project_id/repository endpoint to get all root level folders", // GET_ROOT_FOLDERS
    "make a get request to /api/v1/projects/:project_id/folder/:folder_id endpoint to get folder by id", // GET_FOLDER_BY_ID

    // TESTCASES
  ],

  POST_SPEC: [
    // PROJECTS
    "make a post request to /api/v1/projects/:project_id/edit endpoint to edit project by id", // EDIT_PROJECT_BY_ID
    "make a post request to /api/v1/projects endpoint to create new projects", // CREATE_NEW_PROJECT
    "make a post request to /api/v1/projects/:project_id/delete endpoint to delete project by id", // DELETE_PROJECT_BY_ID

    // FOLDERS
    "make a post request to /api/v1/projects/:project_id/repository/mkdir endpoint to create new folder", // CREATE_ROOT_FOLDER
    "make a post request to /api/v1/projects/:project_id/folder/:folder_id/rename endpoint to edit newly created folder", // EDIT_ROOT_FOLDER
    "make a post request to /api/v1/projects/:project_id/folder/:folder_id/mkdir endpoint to create new sub-folder", // CREATE_SUB_FOLDER
    "make a post request to /api/v1/projects/:project_id/folder/:folder_id/mv endpoint to move/copy folder", // COPY_MOVE_FOLDER
    "make a post request to /api/v1/projects/:project_id/folder/:folder_id/rm endpoint to delete folder", // DELETE_FOLDER

    // TESTCASES
    "make a post request to /api/v1/projects/:project_id/folder/:folder_id/test-cases endpoint to create new test case", // CREATE TESTCASES
    "make a post request to /api/v1/projects/:project_id/folder/:folder_id/test-cases/:testcase_id/edit endpoint to edit test case", // EDIT TESTCASES
    "make a post request to /api/v1/projects/:project_id/folder/:folder_id/test-cases/:testcase_id/delete endpoint to delete test case", // DELETE TESTCASE
  ],
};

module.exports.constants = constants;
module.exports.tcmSpec = tcmSpec;
