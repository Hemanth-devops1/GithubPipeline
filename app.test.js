const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World! This is my CI 🚀');
  });
});
