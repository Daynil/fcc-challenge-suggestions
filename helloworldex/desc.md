#  Serving with ExpressJS

#### Challenge Description

Express helps you respond to client-side requests for information. If you visit a website created with express, express will analyze the route in the address bar to determine what to do next. 

The first part of a URL is called the base URL of a website. When a user visits a route on their browser, the browser automatically issues a `GET` request to the server at the route typed in the URL. If you only type the base URL, you are issuing the request at the `/` route of the server. For example, when you type:

```
http://www.helloworld.com/
```

The browsers issues a `GET` request to the `/` route of the server located at `www.helloworld.com`.

The job of a web server is to issue either a <b>web page</b> or <b>information</b> such as a JSON object, a number, or a string when a client makes a request. The simplest possible express server that serves 'Hello world' in the form of an HTML web page looks like this: 

```javascript
var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('<p>Hello World!</p>');
});

app.listen(3000, function() {
    console.log('Serving on port 3000');
});
```

In this app, you load the express library, then initialize an express app. You tell express that when a client requests the base URL of your web server, you send them the string `'<p>Hello World!</p>'`. The client's browser then receives this string and renders it to the web browser as a paragraph tag in the body of the browser's HTML. The last block of code tells your express app what port on your computer your server will respond to requests from. If you are serving from your home computer, that means it serves at the IP address of your computer on the world wide web, and a specific port on that computer. 

#### Instructions

In your code, try sending the string `'Big Hello!!'` in an `h1` tag when the client sends a `GET` request to your server at the `/bighello` route.


#### Seed code

```javascript
var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('<p>Hello World!</p>');
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

app.get('/', function(request, response) {
    response.send('<p>Hello World!</p>');
});

// Enter code below this line

app.get('/bighello', function(request, response) {
  response.send('<h1>Big Hello!!</h1>');
});

// Only change code above this line

app.listen(3000, function() {
    console.log('Serving on port 3000');
});
```

#### Tests

```javascript
var request = require('request');
var base_url = 'http://localhost:3000/';

describe('Hello world server', function() {
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
      });
    });
  });
});
```

