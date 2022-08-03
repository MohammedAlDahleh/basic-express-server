'use strict';
const server = require("../src/server");
const supertest = require("supertest");
const req = require("express/lib/request");
const request = supertest(server.app);




describe("testing Validator", () => {

    test("Is name null in the query string", async () => {
        const response = await request.get("/person");
        expect(response.status).toEqual(500);

    })

    test("name is in the query string", async () => {
        const response = await request.get("/person?name=shams")
        expect(response.status).toEqual(200);
    })


    test(" Output object is correct", async () => {
        const response = await request.get('/person?name=shams');
        expect(response.body).toEqual({ "name": "mohammed" })

    })

    test(" name is empty", async () => {
        const response = await request.get('/person?name=');
        expect(response.body).toEqual({ "name": "user" })

    })

    test(" name is not string", async () => {
        const response = await request.get('/person?name=$$');
        expect(response.body).toEqual({ "name": "invalid name" })

    })
});
