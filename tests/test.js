process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let id;

chai.use(chaiHttp);

describe('Test of api/movie', () => {
    it('GET all the movies', (done) => {
        chai.request(server)
            .get('/api/movie/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                res.body.should.have.property('result');
                res.body.result.should.be.a('array');
                done();
            });
    });
    it('GET the movies by title', (done) => {
        chai.request(server)
            .get('/api/movie/?title=Casablanca')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                res.body.should.have.property('result');
                res.body.result.should.be.a('array');
                done();
            });
    });
    it('GET the movies by stars', (done) => {
        chai.request(server)
            .get('/api/movie/?stars=Paul Newman')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                res.body.should.have.property('result');
                res.body.result.should.be.a('array');
                done();
            });
    });
    it('POST a movie', (done) => {
        let movie = {
            title: "Blazing Saddles",
            releaseYear: 1974,
            format: "VHS",
            stars: [
                "Mel Brooks",
                "Clevon Little",
                "Harvey Korman",
                "Gene Wilder"
            ]
        }
        chai.request(server)
            .post('/api/movie/')
            .send(movie)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                res.body.should.have.property('result');
                res.body.result.should.be.a('object');
                res.body.result.should.have.property('_id');
                res.body.result.should.have.property('title');
                res.body.result.should.have.property('releaseYear');
                res.body.result.should.have.property('format');
                id = res.body.result._id;
                done();
            });
    });
    it('GET the movie by id', (done) => {
        chai.request(server)
            .get('/api/movie/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                res.body.should.have.property('result');
                res.body.result.should.be.a('object');
                res.body.result.should.have.property('_id');
                res.body.result.should.have.property('title');
                res.body.result.should.have.property('releaseYear');
                res.body.result.should.have.property('format');
                done();
            });
    });
    it('DELETE the movie by id', (done) => {
        chai.request(server)
            .delete('/api/movie/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                done();
            });
    });
});
