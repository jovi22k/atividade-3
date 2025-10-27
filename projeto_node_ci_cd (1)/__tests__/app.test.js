
const request = require('supertest');
const app = require('../app');

describe('Testes da API', () => {
  it('Deve responder com API Online', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('API Online');
  });

  it('Deve permitir login com credenciais corretas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: '1234' });
    expect(res.statusCode).toBe(200);
  });

  it('Deve recusar login com credenciais incorretas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'user', password: 'errado' });
    expect(res.statusCode).toBe(401);
  });
});
