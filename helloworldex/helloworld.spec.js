var request = require('request');
var base_url = 'http://localhost:3000/';

describe('Hello world server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(base_url, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('has hello world in body', function(done) {
      request.get(base_url, function(err, res, body) {
        expect(body).toBe('<p>Hello World!</p>');
        done();
      })
    });
  });

  describe('GET /bighello', function() {
    it('returns status code 200', function(done) {
      request.get(base_url+'bighello', function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('has Big Hello!! in h1 tags in body', function(done) {
      request.get(base_url+'bighello', function(err, res, body) {
        expect(body).toBe('<h1>Big Hello!!</h1>');
        done();
      })
    });
  });
});