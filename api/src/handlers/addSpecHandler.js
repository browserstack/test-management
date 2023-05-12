const { handler } = require('pactum');
const { tcmSpec } = require('../constants/common_constant.js');
require('../handlers/addAHandler.js');

/****** GET REQUEST ******/
for (handler_name of tcmSpec.GET_SPEC) {
    handler.addSpecHandler(handler_name, (ctx) => {
        const { spec, data } = ctx;
        spec.get(data)
    });
}

/****** POST REQUEST ******/
for (handler_name of tcmSpec.POST_SPEC) {
    handler.addSpecHandler(handler_name, (ctx) => {
        const { spec, data } = ctx;
        spec.post(data)
    });
}
