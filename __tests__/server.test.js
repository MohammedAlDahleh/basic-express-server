'use strict';
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe('Api Server', () => {
    test('getting data from home route / ', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Welcom to Home page');
    });
})

it('handle not found request', async () => {
    const response = await request.get("/abc");
    expect(response.status).toEqual(404);

})

it('bad method', async () => {
    const response = await request.post('/person?name=sh');
    expect(response.status).toEqual(404);

});
