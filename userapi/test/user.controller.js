const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient');

describe('User', () => {

  before(() => {
    // Clean DB before each test
    db.flushdb();
  });


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('avoid creating an existing user', (done)=> {
      // Warning: the user already exists
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      userController.create(user, (err, result) => {
        expect(err).to.be.not.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });
  })

  describe('Get', ()=> {
    // TODO Create test for the get method
    it('get a user by username', (done) => {
      // 1. First, create a user to make this unit test independent from the others
      // 2. Then, check if the result of the get method is correct
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      userController.create(user, () => {

        userController.get(user.username,(err,result) => {
          expect(err).to.be.equal(null);
          expect(result).to.be.eql({
            firstname: 'Sergei',
            lastname: 'Kudinov'
          });
          done();
        });
      });
    })

    // TODO Create test for the get method
    it('cannot get a user when it does not exist', (done) => {
      // 1. First, create a user to make this unit test independent from the others
      // 2. Then, check if the result of the get method is correct
      const user = {
        username: 'gioia3022',
        firstname: 'Gioia',
        lastname: 'Galiazzo'
      };
      userController.get(user.username,(err,result) => {
        expect(err).to.be.not.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });

  })
})