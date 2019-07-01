const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect
const deleteTestPlayer = require('../helpers/deleteTestPlayer')




chai.use(chaiHttp);

describe('User Routes', function() {
    after(function() {
        deleteTestPlayer();
      });
    
    describe('POST /register', function() {
        describe('Success Case', function(){
            it('should send an object with 201 status code', function(done) {
            //
            chai
                .request(app)
                .post('/user/register')
                .send({
                    "first_name": "Test",
                    "last_name": "Testing",
                    "email": "test@gmail.com",
                    "password": "asdasd123",
                    "avatar" :"asdasdasdadasdasd",
                    "phoneNumber" : "012301230123",
                    "addres" : "asdasdasd",
                    "role": "Customer"
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('first_name')
                expect(res.body).to.have.property("last_name")
                expect(res.body).to.have.property("email")
                expect(res.body).to.have.property("avatar")
                expect(res.body).to.have.property("phoneNumber")
                expect(res.body).to.have.property("addres")
                expect(res.body).to.have.property("role")
                done()
        
                })
                .catch(function(err) {
                    console.log(err);
                })
                
            })
        })

        describe('Error Case', function(){
            it('Duplicate Email', function(done) {
                chai
                .request(app)
                .post('/user/register')
                .send({
                    "first_name": "Test",
                    "last_name": "Testing",
                    "email": "sukonto@gmail.com",
                    "password": "asdasd123",
                    "avatar" :"asdasdasdadasdasd",
                    "phoneNumber" : "012301230123",
                    "addres" : "asdasdasd",
                    "role": "Customer"
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('errorArr');
                expect(res.body.errorArr[0].message).to.equal('Email is already registered!')
                done()
        
                })
                .catch(function(err) {
                console.log(err);
                })
            })

            it('No Email Input', function(done) {
                chai
                .request(app)
                .post('/user/register')
                .send({
                    "first_name": "Test",
                    "last_name": "Testing",
                    "email": "",
                    "password": "asdasd123",
                    "avatar" :"asdasdasdadasdasd",
                    "phoneNumber" : "012301230123",
                    "addres" : "asdasdasd",
                    "role": "Customer"
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('errorArr');
                expect(res.body.errorArr[0].message).to.equal(' invalid email')
                done()
        
                })
                .catch(function(err) {
                console.log(err);
                })
            })

            it('Wrong Email Format', function(done) {
                chai
                .request(app)
                .post('/user/register')
                .send({
                    "first_name": "Test",
                    "last_name": "Testing",
                    "email": "aaaaa.com",
                    "password": "asdasd123",
                    "avatar" :"asdasdasdadasdasd",
                    "phoneNumber" : "012301230123",
                    "addres" : "asdasdasd",
                    "role": "Customer"
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('errorArr');
                expect(res.body.errorArr[0].message).to.equal('aaaaa.com invalid email')
                done()
        
                })
                .catch(function(err) {
                console.log(err);
                })
            })

            it('No firstname Input', function(done) {
                chai
                .request(app)
                .post('/user/register')
                .send({
                    "first_name": "",
                    "last_name": "Testing",
                    "email": "aaaaa@.com",
                    "password": "asdasd123",
                    "avatar" :"asdasdasdadasdasd",
                    "phoneNumber" : "012301230123",
                    "addres" : "asdasdasd",
                    "role": "Customer"
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('errorArr');
                expect(res.body.errorArr[0].message).to.equal('Path `first_name` is required.')
                done()
        
                })
                .catch(function(err) {
                console.log(err);
                })
            })

            it('No Lastname Input', function(done) {
                chai
                .request(app)
                .post('/user/register')
                .send({
                    first_name: "Dedy",
                    last_name: "",
                    email: "asd@gmail.com",
                    password: "asdasd123",
                    avatar :"asdasdasdadasdasd",
                    phoneNumber : "012301230123",
                    addres : "asdasdasd"
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('errorArr');
                expect(res.body.errorArr[0].message).to.equal('Path `last_name` is required.')
                done()
        
                })
                .catch(function(err) {
                console.log(err);
                })
            })

            it('No phone number Input', function(done) {
                chai
                .request(app)
                .post('/user/register')
                .send({
                    first_name: "dedy",
                    last_name: "Simamora",
                    email: "asd@gmail.com",
                    password: "asdasd123",
                    avatar :"asdasdasdadasdasd",
                    phoneNumber : "",
                    addres : "asdasdasd"
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('errorArr');
                expect(res.body.errorArr[0].message).to.equal('Path `phoneNumber` is required.')
                done()
        
                })
                .catch(function(err) {
                console.log(err);
                })
            })

            it('No addres Input', function(done) {
                chai
                .request(app)
                .post('/user/register')
                .send({
                    first_name: "dedy",
                    last_name: "Simamora",
                    email: "asd@gmail.com",
                    password: "asdasd123",
                    avatar :"asdasdasdadasdasd",
                    phoneNumber : "12312355",
                    addres : ""
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('errorArr');
                expect(res.body.errorArr[0].message).to.equal('Path `addres` is required.')
                done()
        
                })
                .catch(function(err) {
                console.log(err);
                })
            })

        })
      })

      describe('POST /login', function() {
        describe('Success Case', function(){
            it('should send an object (Token) with 200 status code', function(done) {
            //
            chai
                .request(app)
                .post('/user/login')
                .send({
                    email: "sukonto@gmail.com",
                    password: "asdasd123",
                })
                .then(function(res) {
        
                // Assertion
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('token')
                done()
        
                })
                .catch(function(err) {
                console.log(err);
                })
                
            })
        })

        describe('Error Case', function(){
            
                it('Wrong Password', function(done) {
                    //
                    chai
                        .request(app)
                        .post('/user/login')
                        .send({
                            "email": "sukonto@gmail.com",
                            "password": "asdaasd123",
                        })
                        .then(function(res) {
                
                        // Assertion
                        expect(res).to.have.status(400);
                        expect(res.body).to.be.an('object');
                        expect(res.body).to.have.property('message')
                        expect(res.body.message).to.equal('Email / Password Not Match')

                        done()
                
                        })
                        .catch(function(err) {
                        console.log(err);
                        })
                        
                    })

                    it('Wrong Email', function(done) {
                        //
                        chai
                            .request(app)
                            .post('/user/login')
                            .send({
                                email: "sukaonto@gmail.com",
                                password: "asdaasd123",
                            })
                            .then(function(res) {
                    
                            // Assertion
                            expect(res).to.have.status(404);
                            expect(res.body).to.be.an('object');
                            expect(res.body).to.have.property('message')
                            expect(res.body.message).to.equal('Not Found')
    
                            done()
                    
                            })
                            .catch(function(err) {
                            console.log(err);
                            })
                            
                        })
            
            
         })
      })
})