var fs = require('fs');
var request = require('request');
var base_url = 'http://localhost:3000/';
var aboutpg = fs.readFileSync(__dirname + '/aboutpage.html', 'utf-8');

describe('Homepage server', function() {
  describe('GET /about', function() {
    it('returns status code 200', function(done) {
      request.get(base_url+'about', function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('returns the aboutpage.html file', function(done) {
      request.get(base_url+'about', function(err, res, body) {
        expect(body).toBe(aboutpg);
        done();
      });
    });

  });
});