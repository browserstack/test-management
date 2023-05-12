const { handler } = require('pactum');

handler.addAssertHandler('number', (ctx) => {
    return typeof ctx.data === 'number';
});

handler.addAssertHandler('string', (ctx) => {
    return typeof ctx.data === 'string';
});

handler.addAssertHandler('boolean', (ctx) => {
    return typeof ctx.data === 'boolean';
});

handler.addAssertHandler('number_or_null', (ctx) => {
    return typeof ctx.data === 'number' || ctx.data === null;
});

handler.addAssertHandler('string_or_null', (ctx) => {
    return typeof ctx.data === 'string' || ctx.data === null;
});

handler.addAssertHandler('boolean_or_null', (ctx) => {
    return typeof ctx.data === 'boolean' || ctx.data === null;
});
