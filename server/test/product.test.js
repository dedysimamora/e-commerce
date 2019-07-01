const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect
chai.use(chaiHttp);



describe('Product Routes', function() {

    describe('GET /', function() {
        describe('Sucess Case', function(){
            it('should send an object with 201 status code', function(done) {
                //
                chai
                    .request(app)
                    .get('/product')
                    .then(function(res) {
            
                    // Assertion
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done()
            
                    })
                    .catch(function(err) {
                    console.log(err);
                    })
                    
                })
        })
        
    })

    describe('GET /:id', function() {
        describe('Sucess Case', function(){
            it('should send an object with 201 status code', function(done) {
                //
                chai
                    .request(app)
                    .get('/product/5d11bf12afe29a218ba2be71')
                    .then(function(res) {
            
                    // Assertion
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    done()
            
                    })
                    .catch(function(err) {
                    console.log(err);
                    })
                    
                })
        })
        describe('Error Case', function(){
            it('Wrong product object with 500 status code', function(done) {
                //
                chai
                    .request(app)
                    .get('/product/232321')
                    .then(function(res) {
            
                    // Assertion
                    expect(res).to.have.status(500);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('Cast to ObjectId failed for value \"232321\" at path \"_id\" for model \"Product\"')
                    done()
            
                    })
                    .catch(function(err) {
                    console.log(err);
                    })
                    
                })
        })
    })

    describe('POST /', function() {
        describe('Sucess Case', function(){
            it('Create Product should send an object with 201 status code', function(done) {
                //
                chai
                    .request(app)
                    .post('/product/add')
                    .set({
                        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTA5NGU0YjA0Mzc0M2JjOWExMGJmYiIsImVtYWlsIjoic3Vrb250b0BnbWFpbC5jb20iLCJpYXQiOjE1NjE0NjAwOTF9.dSzR3ug3OQYFdQ-dviuCkhE8Jy9HXOLSCb4WrmzPrrc"
                    })
                    .send({
                        name:'Sepatu Satpam 2',
                        price:'200000',
                        category:'Aksesoris',
                        photo:'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/2/10/7074666/7074666_9f057bd0-ed1b-4952-9bd0-ca5f8e9538b6.jpg',
                        qty:'26'
                    })
                    .then(function(res) {
            
                    // Assertion
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('_id')
                    expect(res.body).to.have.property('name')
                    expect(res.body).to.have.property("price")
                    expect(res.body).to.have.property("photo")
                    expect(res.body).to.have.property("qty")
                    done()
            
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
                    
                })

        })
        describe('Error Case', function(){
            it('Create Product but no token should send an object with 401 status code', function(done) {
                //
                chai
                    .request(app)
                    .post('/product/add')
                    .send({
                        name:'Sepatu Satpam 2',
                        price:'200000',
                        category:'Aksesoris',
                        photo:'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/2/10/7074666/7074666_9f057bd0-ed1b-4952-9bd0-ca5f8e9538b6.jpg',
                        qty:'26'
                    })
                    .then(function(res) {
            
                    // Assertion
                    expect(res).to.have.status(401);
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('message')
                    expect(res.body.message).to.equal('Unauthorized')
                    done()
            
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
                    
                })
        })
    })

    describe('DELETE /:id', function() {
        describe('Sucess Case', function(){
            it('Delete Product should send an object with 200 status code', function(done) {
                //
                chai
                    .request(app)
                    .delete('/product/5d11ff0432e0a43a0292cca7')
                    .set({
                        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTA5NGU0YjA0Mzc0M2JjOWExMGJmYiIsImVtYWlsIjoic3Vrb250b0BnbWFpbC5jb20iLCJpYXQiOjE1NjE0NjAwOTF9.dSzR3ug3OQYFdQ-dviuCkhE8Jy9HXOLSCb4WrmzPrrc"
                    })
                    .then(function(res) {
            
                    // Assertion
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('_id')
                    expect(res.body).to.have.property('name')
                    expect(res.body).to.have.property("price")
                    expect(res.body).to.have.property("photo")
                    expect(res.body).to.have.property("qty")
                    done()
            
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
                    
                })
        })
        describe('error Case', function(){

        })
    })

    describe('PUT /:id', function() {
        describe('Sucess Case', function(){

        })
        describe('Error Case', function(){

        })
    })


})