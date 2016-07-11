var express = require('express');
var app = express();
var productList = [
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

app.get('/api/productlist', function(request, response) {
  response.json(productList);
});

app.listen(3000, function() {
    console.log('Serving on port 3000');
});