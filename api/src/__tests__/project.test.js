const { spec, request } = require("pactum");
const { constants } = require("../constants/common_constant");
const {
  projectConstant,
  projectResponseBody,
} = require("../constants/project_constant");
require("../handlers/addAHandler.js");

describe("Project Test Case, @regression @project", function () {
  const environment =
    process.env.PROFILE === "staging" ? constants.TCM_STAG : constants.TCM_PROD;

  request.setBaseUrl(environment.URL);
  request.setDefaultHeaders("Cookie", environment.COOKIE);
  request.setDefaultTimeout(1000);

  let createProjectId = null;
  let editProjectId = null;
  let getProjectId = null;
  let deleteProjectId = null;

  async function createProject() {
    res = await spec(
      "make a post request to /api/v1/projects endpoint to create new projects",
      projectConstant.CREATE_NEW_PROJECT
    )
      // .withJson({ project: "$F{CreateProjectPayload}" })
      .expectStatus(200)
      .expectJsonLike(projectResponseBody.GET_PROJECT_BY_ID_RESPONSE);
    return res.body.data.project.id;
  }

  async function deleteProject(deleteProjectId) {
    await spec(
      "make a post request to /api/v1/projects/:project_id/delete endpoint to delete project by id",
      projectConstant.DELETE_PROJECT_BY_ID.replace(
        ":project_id",
        deleteProjectId
      )
    )
      .expectStatus(200)
      .expectJsonLike(projectResponseBody.GET_PROJECT_BY_ID_RESPONSE);
  }

  // create new project
  it("create new project", async () => {
    createProjectId = await createProject();
  });

  // // edit project by :project_id
  // it("edit project by id", async () => {
  //   editProjectId = await createProject();
  //   res = await spec(
  //     "make a post request to /api/v1/projects/:project_id/edit endpoint to edit project by id",
  //     projectConstant.EDIT_PROJECT_BY_ID.replace(":project_id", editProjectId)
  //   )
  //     .withJson({ project: "$F{EditProjectPayload}" })
  //     .expectStatus(200)
  //     .expectJsonLike(projectResponseBody.GET_PROJECT_BY_ID_RESPONSE);
  // });

  // // get project by :project_id
  // it("get project by id", async () => {
  //   getProjectId = await createProject();
  //   await spec(
  //     "make a get request to /api/v1/projects/:project_id endpoint to get project by id",
  //     projectConstant.GET_PROJECT_BY_ID.replace(":project_id", getProjectId)
  //   )
  //     .expectStatus(200)
  //     .expectJsonLike(projectResponseBody.GET_PROJECT_BY_ID_RESPONSE);
  // });

  // // delete project by :project_id
  // it("delete project by id", async () => {
  //   deleteProjectId = await createProject();
  //   await deleteProject(deleteProjectId);
  // });

  // // get all projects
  // it("get all projects", async () => {
  //   await spec(
  //     "make a get request to /api/v1/projects endpoint to get all projects",
  //     projectConstant.GET_ALL_PROJECTS
  //   )
  //     .expectStatus(200)
  //     .expectJsonLike(projectResponseBody.GET_ALL_PROJECTS_RESPONSE);
  // });

  // // cleanup project regression
  // it("cleanup project regression", async () => {
  //   await deleteProject(createProjectId);
  //   await deleteProject(editProjectId);
  //   await deleteProject(getProjectId);
  // });
});
