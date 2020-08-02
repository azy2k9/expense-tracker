const request = require('supertest');

const app = require('../src/app');
const Expense = require('../src/models/Expense');

describe('GET /api/v1', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/api/v1')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404, done);
  });
});

describe('GET /api/v1/expenses', () => {
  it('gets all expenses from the db', (done) => {
    request(app)
      .get('/api/v1/expenses')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
