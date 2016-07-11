#  Route Parameters

#### Challenge Description

Express can process parts of a url as a parameter that you can access. You can designate a portion of your route as a parameter by prefixing it with `:` and the name of the parameter.

```javascript
app.get('/name/:user', function(request, response) {
  var clientName = request.params.user;
});
```
Now, if an application makes a `GET` request to this route, you can grab a reference to the contents of `:user`.

#### Instructions

Create a server that can process `GET` requests to the route `/times42/:number`. Requests to this route should respond with the result of the number parameter * 42.

#### Seed code

```javascript
var express = require('express');
var app = express();

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

app.get('/times42/:number', function(request, response) {
  var clientNumber = request.params.number;
  response.send('' + clientNumber*42);
});

app.listen(3000, function() {
    console.log('Serving on port 3000');
});
```

#### Tests

```javascript
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
```

