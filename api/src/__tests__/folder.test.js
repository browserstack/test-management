const { spec, request } = require("pactum");
const {
  projectConstant,
  projectResponseBody,
} = require("../constants/project_constant");
const {
  folderConstant,
  folderResponseBody,
} = require("../constants/folder_constant");

require("../handlers/addAHandler.js");

describe("Folders, @regression @folder", function () {
  const environment =
    process.env.PROFILE === "staging" ? constants.TCM_STAG : constants.TCM_PROD;
  request.setBaseUrl(environment.URL);
  request.setDefaultHeaders("Cookie", environment.COOKIE);
  request.setDefaultTimeout(5000);

  let createProjectId = null;

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

  async function deleteFolder(folderId) {
    await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/rm endpoint to delete folder",
      folderConstant.DELETE_FOLDER.replace(
        ":project_id",
        createProjectId
      ).replace(":folder_id", folderId)
    )
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.DELETE_FOLDER_RESPONSE);
  }

  // create new project for testing folder
  it("create new project for testing folder", async () => {
    createProjectId = await createProject();
  });

  // create folder at root level
  it("create root folder", async () => {
    await createFolder();
  });

  // update folder at root level
  it("update root folder", async () => {
    createFolderId = await createFolder();
    await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/rename endpoint to edit newly created folder",
      folderConstant.EDIT_ROOT_FOLDER.replace(
        ":project_id",
        createProjectId
      ).replace(":folder_id", createFolderId)
    )
      .withJson({ folder: "$F{EditFolderPayload}" })
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.CREATE_ROOT_FOLDER_RESPONSE);
  });

  // create sub folder
  it("create sub folder", async () => {
    createFolderId = await createFolder();
    await createSubFolder(createFolderId);
  });

  //move sub-folder to root folder
  it("move sub-folder to root folder", async () => {
    createFolderId = await createFolder();
    createAnotherFolderId = await createFolder();
    createSubFolderId = await createSubFolder(createFolderId);
    await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/mv endpoint to move/copy folder",
      folderConstant.COPY_MOVE_FOLDER.replace(
        ":project_id",
        createProjectId
      ).replace(":folder_id", createSubFolderId)
    ) // sub folder id which you want to move to root folder
      .withBody("$F{MoveFolderPayload}")
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.CREATE_ROOT_FOLDER_RESPONSE);
  });

  // move sub-folder to another folder
  it("move sub-folder to another folder", async () => {
    createFolderId = await createFolder();
    createAnotherFolderId = await createFolder();
    createSubFolderId = await createSubFolder(createFolderId);
    await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/mv endpoint to move/copy folder",
      folderConstant.COPY_MOVE_FOLDER.replace(
        ":project_id",
        createProjectId
      ).replace(":folder_id", createSubFolderId)
    ) // sub folder id which you want to move to another folder
      .withBody(`$F{MoveFolderPayload:${createAnotherFolderId}}`)
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.CREATE_ROOT_FOLDER_RESPONSE);
  });

  // move folder(A) to another folder(B), such that A is now a sub-folder of B
  it("move folder to another folder", async () => {
    createFolderId = await createFolder();
    createAnotherFolderId = await createFolder();
    await spec(
      "make a post request to /api/v1/projects/:project_id/folder/:folder_id/mv endpoint to move/copy folder",
      folderConstant.COPY_MOVE_FOLDER.replace(
        ":project_id",
        createProjectId
      ).replace(":folder_id", createAnotherFolderId)
    ) // folder id which you want to move to another folder
      .withBody(`$F{MoveFolderPayload:${createFolderId}}`)
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.CREATE_ROOT_FOLDER_RESPONSE);
  });

  // get root folders
  it("get root folders", async () => {
    await createFolder();
    await createFolder();
    await createFolder();
    res = await spec(
      "make a get request to /api/v1/projects/:project_id/repository endpoint to get all root level folders",
      folderConstant.GET_ROOT_FOLDERS.replace(":project_id", createProjectId)
    )
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.GET_ROOT_FOLDERS_RESPONSE);
  });

  // get specific folder, its sub-folder details and test cases details
  it("get folder by id", async () => {
    createFolderId = await createFolder();
    createSubFolder1Id = await createSubFolder(createFolderId);
    createSubFolder2Id = await createSubFolder(createSubFolder1Id);
    createSubFolder3Id = await createSubFolder(createSubFolder2Id);
    createSubFolder4Id = await createSubFolder(createSubFolder3Id);
    res = await spec(
      "make a get request to /api/v1/projects/:project_id/repository endpoint to get all root level folders",
      folderConstant.GET_FOLDER_BY_ID.replace(
        ":project_id",
        createProjectId
      ).replace(":folder_id", createFolderId)
    )
      .expectStatus(200)
      .expectJsonLike(folderResponseBody.GET_FOLDER_BY_ID_NO_TC_RESPONSE);
  });

  // delete folder and sub folder
  it("delete folder and sub folder", async () => {
    createFolderId = await createFolder();
    createSubFolderId = await createSubFolder(createFolderId);
    await deleteFolder(createSubFolderId);
    await deleteFolder(createFolderId);
  });

  // cleanup folder regression
  it("cleanup folder regression", async () => {
    await deleteProject(createProjectId);
  });
});
