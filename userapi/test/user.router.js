const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index');
const client = require('../src/dbClient');
const userController = require("../src/controllers/user");
const { expect } = require('chai');

chai.use(chaiHttp);

describe('User REST API', () => {

  beforeEach(() => {
    // Clean DB before each test
    client.flushdb();
  });
  
  after(()=> {
    app.close()
    client.quit()
  });

  describe('POST /user', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201);
          chai.expect(res.body.status).to.equal('success');
          chai.expect(res).to.be.json;
          done();
        })
        .catch((err) => {
           throw err
        });
    });
    
    it('pass wrong parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(400);
          chai.expect(res.body.status).to.equal('error');
          chai.expect(res).to.be.json;
          done();
        })
        .catch((err) => {
           throw err
        });
    });
  });

  describe('GET /user', ()=> {
    it('get an existing user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      //Create a user
      userController.create(user,()=>{
        //Get the User
        chai.request(app)
        .get('/user/'+user.username)
        .then((res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body.status).to.equal("success");
          chai.expect(res).to.be.json;
          done();
        })
        .catch((err) => {
          throw err;
        });
      });
    });

    it('impossible to get a user when it does not exist', (done) => {
      chai.request(app)
      .get('/user/invalid')
      .then((res) => {
        chai.expect(res).to.have.status(400);
        chai.expect(res.body.status).to.equal("error");
        chai.expect(res).to.be.json;
        done();
      })
      .catch((err) => {
        throw err;
      });
    });

  });


  describe('Put /user', ()=> {
    it('update user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      //Create a user
      userController.create(user,()=>{
        //Get the User
        chai.request(app)
        .put('/user/'+user.username)
        .send({
          firstname: "Gioia",
          lastname: "Galiazzo"
        })
        .then((res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body.status).to.equal("success");
          chai.expect(res).to.be.json;
          userController.get(user.username, (error,resp)=>{
            expect(error).to.be.equal(null)
            expect(resp).to.be.eql({
              firstname: "Gioia",
              lastname: "Galiazzo"
            })
            done();
          })
        })
        .catch((err) => {
          throw err;
        });
      });
    });

    it('impossible to update a user when it does not exist', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      chai.request(app)
      .put('/user/invalid')
      .send(user)
      .then((res) => {
        chai.expect(res).to.have.status(400);
        chai.expect(res.body.status).to.equal("error");
        chai.expect(res).to.be.json;
        done();
      })
      .catch((err) => {
        throw err;
      });
    });

    it('impossible update a username', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      chai.request(app)
      .post('/user/')
      .send(user)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        chai.expect(res.body.status).to.equal("success");
        chai.expect(res).to.be.json;
        chai.request(app)
        .put('/user/' + user.username)
        .send({
          username: 'gioia3022'
        })
        .then((res) => {
          chai.expect(res).to.have.status(400);
          chai.expect(res.body.status).to.equal("error");
          chai.expect(res).to.be.json;
          done();
        })
      })
      .catch((err) => {
        throw err;
      });
    });

  });

  describe('Delete /user', (done) => {

    it('delete a user', (done)=>{
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      chai.request(app)
      .post('/user/')
      .send(user)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        chai.expect(res.body.status).to.equal("success");
        chai.expect(res).to.be.json;
        chai.request(app)
        .delete('/user/' + user.username)
        .then((res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body.status).to.equal("success");
          chai.expect(res).to.be.json;
          done();
        })  
      })
    })

    it("impossible to delete a user that doesn't exist", (done)=>{
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
      chai.request(app)
      .delete('/user/' + user.username)
      .then((res) => {
        chai.expect(res).to.have.status(400);
        chai.expect(res.body.status).to.equal("error");
        chai.expect(res).to.be.json;
        done();
      })
    })
  });
});
