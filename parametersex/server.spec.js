var request = require('request');
var base_url = 'http://localhost:3000/times42/';


describe('Hello world server', function() {
  describe('GET /times42/12', function() {
    it('returns correct output', function(done) {
      request.get(base_url+'12', function(err, res, body) {
        expect(body).toBe('504');
        done();
      });
    });
  });
});