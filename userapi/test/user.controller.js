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
      userController.create(user, function(err, result) {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', function(done) {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, function(err, result) {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('avoid creating an existing user', function(done) {
      // Warning: the user already exists
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      //Create a user
      userController.create(user, function(err, result) {
        expect(err).to.be.not.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });
  })

  describe('Get', ()=> {
    // TODO Create test for the get method
    it('get a user by username', function(done) {
      // 1. First, create a user to make this unit test independent from the others
      // 2. Then, check if the result of the get method is correct
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      userController.create(user, () => {

        userController.get(user.username,function(err,result) {
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
    it('can not get a user when it does not exist', function(done) {
      //Lets create a user to unit test
      const user = {
        username: 'gioia3022',
        firstname: 'Gioia',
        lastname: 'Galiazzo'
      };
      // Checking result of get method
      userController.get(user.username,(err,result) => {
        expect(err).to.be.not.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });

  })

  describe('Update', function() {

    beforeEach(() => {
      db.flushdb();
    })

    it('cannot update username',function(done) {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      userController.create(user, () => {
        const update = {
          username: "gioia3022"
        }
        userController.update(user.username,update,function(err,result) {
          expect(err).to.not.be.equal(null);
          expect(result).to.be.eql(undefined);
          done();
        });
      });
    })

    it('modify any prorieties apart username', function(done) {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      userController.create(user, () => {
        const update = {
          firstname: "Gioia",
          lastname: "Galiazzo"
        }
        userController.update(user.username,update,function(err,result) {
          expect(err).to.be.equal(null);
          expect(result).to.not.be.equal(null);
          done();
        });
      });
    })

    it("cannot update a user that doesn't exist", function(done) {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      userController.update(user.username,user, function(err,result) {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    })
  })

  describe('Delete', () => {

    it('delete a user', function(done){
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      userController.create(user, () => {
        userController.delete(user.username,(err,result) => {
          expect(err).to.be.equal(null);
          expect(result).not.to.be.equal(null);
          userController.get(user.username,(err,result) => {
            expect(err).to.not.be.equal(null);
            expect(result).to.be.eql(null);
            done();
          });
        });
      })
    })
    it("cannot delete a user that doesn't exist", function(done) {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      userController.delete(user.username,function(err,result) {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
        });
      });
    })
})