const request = require('supertest');
const auth = require('../src/api/auth');
const database = require('../src/database');
const User = require('../src/models/User');

describe('Auth /login POST', async () => {
    beforeEach(() => {
      database.connect();
      const credentials = { email: 'test-auth-email@gmail.com', password: 'test-auth-password' };
      const user = await User.create(credentials);
    });

    it('requires an email and password to login', (done) => {

    });


    it('errors when it cannot find a valid user', (done) => {

    });
    
    it('finds valid users', (done) => {
        request(auth)
        .post('/login')
        .send({ email: user.email, password: user.password})
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
        .expect(user.name).toEqual(credentials.email)
        .expect(user.password).toEqual(credentials.password)
    });
  
  afterEach((done) => {
    database.disconnect(done);
  });
});

describe('Auth /login POST', async () => {
    beforeEach(() => {
      database.connect();
      const credentials = { email: 'test-auth-email@gmail.com', password: 'test-auth-password' };
      const user = await User.create(credentials);
    });

    it('requires an email and password', (done) => {

    });

    it('will not create a user if the email already exists', (done) => {

    });
    
    it('can register users with valid credentials', (done) => {

    });
  
  afterEach((done) => {
    database.disconnect(done);
  });
});

