`use srict`
const logger = require('../src/middleware/logger');

describe('logger middleware', () => {

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })

    test('it is logging something or routes', () => {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    test('it is calling next', () => {
        logger(req, res, next);
        expect(next).toHaveBeenCalled();
    })


    afterEach(() => {
        consoleSpy.mockRestore();
    })
})