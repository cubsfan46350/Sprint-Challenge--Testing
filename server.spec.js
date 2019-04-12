const request = require('supertest');

const server = require('./server.js');

describe('Get Games', () => {
    it('returns with 200 status code', () => {
        return request(server).get('/').then(response => {
            expect(response.status).toBe(200);
        });
    });
    it('return json', () => {
        return request(server).get('/').then(response => {
            expect(response.type).toBe('application/json')
        });
    });
});