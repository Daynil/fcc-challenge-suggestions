var fs = require('fs');
var request = require('request');
var base_url = 'http://localhost:3000/';
var index = fs.readFileSync(__dirname + '/public/index.html', 'utf-8');
var otherpage = fs.readFileSync(__dirname + '/public/page2/otherpage.html', 'utf-8');
var styles = fs.readFileSync(__dirname + '/public/styles.css', 'utf-8');

describe('Directory server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(base_url, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('returns the index.html file', function(done) {
      request.get(base_url, function(err, res, body) {
        expect(body).toBe(index);
        done();
      });
    });
  });

  describe('GET /page2/otherpage.html', function() {
    it('returns status code 200', function(done) {
      request.get(base_url+'/page2/otherpage.html', function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('returns the otherpage.html file', function(done) {
      request.get(base_url+'/page2/otherpage.html', function(err, res, body) {
        expect(body).toBe(otherpage);
        done();
      });
    });
  });

  describe('GET /styles.css', function() {
    it('returns status code 200', function(done) {
      request.get(base_url+'/styles.css', function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('returns the otherpage.html file', function(done) {
      request.get(base_url+'/styles.css', function(err, res, body) {
        expect(body).toBe(styles);
        done();
      });
    });
  });
});