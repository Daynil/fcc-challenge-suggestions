var request = require('request');
var base_url = 'http://localhost:3000/api/productlist';
var productlist = [
  {
    product: 'shirt',
    price: 19.95,
    quantity: 210
  },
  {
    product: 'pants',
    price: 25.00,
    quanitity: 149
  }
];

describe('Product list api', function() {
  describe('GET /api/productlist', function() {
    it('returns the product list', function(done) {
      request.get(base_url, function(err, res, body) {
        var parsedBody = JSON.parse(body);
        expect(parsedBody).toEqual(productlist);
        done();
      });
    });
  });
});