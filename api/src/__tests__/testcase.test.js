const { spec, request } = require("pactum");
const {
  projectConstant,
  projectResponseBody,
} = require("../constants/project_constant");
const {
  folderConstant,
  folderResponseBody,
} = require("../constants/folder_constant");
const {
  testcaseConstant,
  testcaseResponseBody,
} = require("../constants/testcase_constant");

require("../handlers/addAHandler.js");

describe("Folders, @regression @folder", function () {
  const environment =
    process.env.PROFILE === "staging" ? constants.TCM_STAG : constants.TCM_PROD;

  request.setBaseUrl(environment.URL);
  request.setDefaultHeaders("Cookie", environment.COOKIE);
  request.setDefaultTimeout(30000);

  let createProjectId = null;
  let createFolderId = null;
  let createSubFolderId = null;

  async function createProject() {
    res = await spec(
      "make a post request to /api/v1/projects endpoint to create new projects",
      projectConstant.CREATE_NEW_PROJECT
    )
      .withJson({ project: "$F{CreateProjectPayload}" })
      .expectStatus(200)
      .expectJsonLike(projectResponseBody.GET_PROJECT_BY_ID_RESPONSE);
    return res.body.data.project.id;
  }

  async function deleteProject(projectId) {
    request.setDefaultTimeout(10000);
    await spec(
      "make a post request to /api/v1/projects/:project_id/delete endpoint to delete project by id",
      projectConstant.DELETE_PROJECT_BY_ID.replace(":project_id", projectId)
    )
      .expectStatus(200)
      .expectJsonLike(projectResponseBody.GET_PROJECT_BY_ID_RESPONSE);
  }

  async function createFolder() {
    res = await spec(
      "make a post request to /api/v1/projects/:project_id/repository/mkdir endpoint to create new folder",
      folderConstant.CREATE_ROOT_FOLDER.replace(":project_id", createProjectId)
    )
      .withJson({ folder: "$F{CreateFolderPayload}" })
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.CREATE_ROOT_FOLDER_RESPONSE);
    return res.body.data.folder.id;
  }

  async function createSubFolder(parentFolderId) {
    res = await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/mkdir endpoint to create new sub-folder",
      folderConstant.CREATE_SUB_FOLDER.replace(
        ":project_id",
        createProjectId
      ).replace(":folder_id", parentFolderId)
    )
      .withJson({ folder: "$F{CreateSubFolderPayload}" })
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.CREATE_ROOT_FOLDER_RESPONSE);
    return res.body.data.folder.id;
  }

  async function createTestCase(folderId, cases) {
    res = await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/test-cases endpoint to create new test case",
      testcaseConstant.CREATE_TESTCASE.replace(
        ":project_id",
        createProjectId
      ).replace(":folder_id", folderId)
    )
      .withBody({ test_case: `$F{TestCasePayload:${cases}}` })
      .expectStatus(200)
      .expectJsonLike(testcaseResponseBody.CREATE_TESTCASE_RESPONSE);
    return res.body.data.test_case.id;
  }

  async function editTestCase(folderId, testCaseId, cases) {
    await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/test-cases/:testcase_id/edit endpoint to edit test case",
      testcaseConstant.EDIT_TESTCASE.replace(":project_id", createProjectId)
        .replace(":folder_id", folderId)
        .replace(":testcase_id", testCaseId)
    )
      .withBody({ test_case: `$F{EditTestCasePayload:${cases}}` })
      .expectStatus(200)
      .expectJsonLike(testcaseResponseBody.EDIT_TESTCASE_RESPONSE);
  }

  async function deleteTestCase(folderId, testCaseId) {
    await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/test-cases/:testcase_id/delete endpoint to delete test case",
      testcaseConstant.DELETE_TESTCASE.replace(":project_id", createProjectId)
        .replace(":folder_id", folderId)
        .replace(":testcase_id", testCaseId)
    )
      .expectStatus(200)
      .expectJsonLike(testcaseResponseBody.DELETE_TESTCASE_RESPONSE);
  }

  // create new project and folder at root level for testing testcases
  it("create new project for testing folder", async () => {
    createProjectId = await createProject();
    createFolderId = await createFolder();
    createSubFolderId = await createSubFolder(createFolderId);
  });

  // create new testcase
  it("create new testcase", async () => {
    await createTestCase(createFolderId);
    await createTestCase(createSubFolderId);
  });

  // edit testcase
  it("edit testcase", async () => {
    testCaseId = await createTestCase(createFolderId);
    await editTestCase(createFolderId, testCaseId);
  });

  // delete testcase
  it("delete testcase", async () => {
    testCaseId = await createTestCase(createFolderId);
    await deleteTestCase(createFolderId, testCaseId);
  }, 30000);

  // create new testcase with description
  it("create new testcase with description", async () => {
    await createTestCase(createFolderId, "TestCase_Description");
    await createTestCase(createSubFolderId, "TestCase_Description");
  });

  // edit testcase with description
  test("edit testcase with description", async () => {
    testCaseId = await createTestCase(createFolderId, "TestCase_Description");
    await editTestCase(createFolderId, testCaseId, "Edit_TestCase_Description");
  }, 30000);

  // delete testcase with description
  it("delete testcase with description", async () => {
    testCaseId = await createTestCase(createFolderId, "TestCase_Description");
    await deleteTestCase(createFolderId, testCaseId);
  }, 30000);

  // create new testcase with template as text and steps, results defined
  it("create new testcase with template as text and steps, results defined", async () => {
    await createTestCase(createFolderId, "TestCase_Text_Steps_Results");
    await createTestCase(createSubFolderId, "TestCase_Text_Steps_Results");
  });

  // edit testcase with template as text and steps, results defined
  it("edit testcase with template as text and steps, results defined", async () => {
    testCaseId = await createTestCase(
      createFolderId,
      "TestCase_Text_Steps_Results"
    );
    await editTestCase(
      createFolderId,
      testCaseId,
      "Edit_TestCase_Text_Steps_Results"
    );
  }, 30000);

  // create new testcase with template as steps
  it("create new testcase with template as steps", async () => {
    await createTestCase(createFolderId, "TestCase_Steps");
    await createTestCase(createSubFolderId, "TestCase_Steps");
  });

  // edit testcase with template as steps
  it("edit testcase with template as steps", async () => {
    testCaseId = await createTestCase(createFolderId, "TestCase_Steps");
    await editTestCase(createFolderId, testCaseId, "Edit_TestCase_Steps");
  }, 30000);

  // create new testcase with template as text and show more fields
  it("create new testcase with template as text and show more fields", async () => {
    await createTestCase(createFolderId, "TestCase_Text_Show_More_Fields");
    await createTestCase(createSubFolderId, "TestCase_Text_Show_More_Fields");
  });

  // edit testcase with template as text and show more fields
  it("edit testcase with template as text and show more fields", async () => {
    testCaseId = await createTestCase(
      createFolderId,
      "TestCase_Text_Show_More_Fields"
    );
    await editTestCase(
      createFolderId,
      testCaseId,
      "Edit_TestCase_Text_Show_More_Fields"
    );
  }, 30000);

  // delete testcase with template as text and show more fields
  it("delete testcase with template as text and show more fields", async () => {
    testCaseId = await createTestCase(
      createFolderId,
      "TestCase_Text_Show_More_Fields"
    );
    await deleteTestCase(createFolderId, testCaseId);
  }, 30000);

  // create new testcase with template as steps and show more fields
  it("create new testcase with template as steps and show more fields", async () => {
    await createTestCase(createFolderId, "TestCase_Steps_Show_More_Fields");
    await createTestCase(createSubFolderId, "TestCase_Steps_Show_More_Fields");
  });

  // edit testcase with template as steps and show more fields
  it("edit testcase with template as steps and show more fields", async () => {
    testCaseId = await createTestCase(
      createFolderId,
      "TestCase_Steps_Show_More_Fields"
    );
    await editTestCase(
      createFolderId,
      testCaseId,
      "Edit_TestCase_Steps_Show_More_Fields"
    );
  }, 30000);

  // delete testcase with template as steps and show more fields
  it("delete testcase with template as steps and show more fields", async () => {
    testCaseId = await createTestCase(
      createFolderId,
      "TestCase_Steps_Show_More_Fields"
    );
    await deleteTestCase(createFolderId, testCaseId);
  }, 30000);

  // cleanup testcase regression
  it("cleanup testcase regression", async () => {
    await deleteProject(createProjectId);
  });
});
