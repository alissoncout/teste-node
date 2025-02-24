const request = require('supertest');
const app = require('../server');
const { initializeDatabase } = require('../database');
const { loadCSVData } = require('../movies.service');
const expectedResponse = require('./expectedResponse.json');

beforeAll(async () => {
    await new Promise(resolve => {
        initializeDatabase(async () => {
            await loadCSVData();
            resolve();
        });
    });
});

describe('Testes de integração da API', () => {
    test('Deve obter o intervalo de prêmios ao chamar /awards/intervals', async () => {
        const res = await request(app).get('/awards/intervals');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('min');
        expect(res.body).toHaveProperty('max');
        expect(Array.isArray(res.body.min)).toBe(true);
        expect(Array.isArray(res.body.max)).toBe(true);
        expect(res.body).toEqual(expectedResponse);
    });
});