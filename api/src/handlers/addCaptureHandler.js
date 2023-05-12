const { handler } = require('pactum');

handler.addCaptureHandler('projectName', (ctx) => {
    response = ctx.res.json
    return response.data.project.name;
});

handler.addCaptureHandler('projectDescription', (ctx) => {
    response = ctx.res.json
    return response.data.project.description;
});

handler.addCaptureHandler('projectID', (ctx) => {
    response = ctx.res.json
    return response.data.project.id;
});

handler.addCaptureHandler('folderID', (ctx) => {
    response = ctx.res.json
    return response.data.folder.id;
});

handler.addCaptureHandler('folderUIPosition', (ctx) => {
    response = ctx.res.json
    return response.data.folder.ui_position;
});
