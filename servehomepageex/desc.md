#  Sending a file

#### Challenge Description

You'll want to send more than just simple strings with your express application. Luckily, express provides ways for you to do just that. Instead of serving a string, you can serve a file containing html, like `myhomepage.html`. 

```javascript
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/myhomepage.html');
});
```
If you want users to see your homepage when they visit your base URL, you instruct express to send the desired file as the response to the `GET` request that the browser makes when a user visits your website.

`__dirname` is a special node variable that represents the string of the directory where the current script (in this case, the express server script) resides. If your `myhomepage.html` resides in the same folder as your server, you would tell express to serve from the name of the current directory `__dirname` plus the name of the file within that folder that you want to serve.

#### Instructions

If your `myhomepage.html` has a link to another page on your website called `about`, a user clicking that link would send a `GET` request to the route `/about`. In your code, serve up the file `aboutpage.html` in response to a request to that route.

#### Seed code

```javascript
var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/myhomepage.html');
});

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

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/myhomepage.html');
});

// Enter code below this line

app.get("/about", function (request, response) {
  response.sendFile(__dirname + '/aboutpage.html');
});

// Only change code above this line

app.listen(3000, function() {
    console.log('Serving on port 3000');
});
```

#### Tests

```javascript
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
```

