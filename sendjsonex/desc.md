# Create an API that sends JSON

#### Challenge Description

Express makes an excellent API server. You can send JSON to the client using the `response.json()` method.

```javascript
response.json({message: 'hello world'});
```

#### Instructions

A server's API works with client side AJAX to provide data for the front end. Create a server that responds to `GET` requests to the route `/api/productlist` with the product list stored on the server. 

#### Seed code

```javascript
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

// Enter code below this line

// Only change code above this line

app.listen(3000, function() {
    console.log('Serving on port 3000');
});
```

#### Solution

```javascript
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
```

#### Tests

```javascript
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
```

