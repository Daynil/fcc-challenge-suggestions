#  Serving directories with static middleware

#### Challenge Description

In real world applications, a particular route on your website will often include multiple files. The `index.html` of that route will often need to reference a `styles.css` and a `scripts.js` in order to serve a complex, interactive view. Instead of sending a series of files manually, express provides a way to serve static files as a full directory using static middleware.

Middleware is a function that express can trigger prior to invoking your final request handler. It sits between the raw request sent by the user and the final intended route. Express comes with the `static` middleware function built in. We can use the static middleware to serve files or entire directories.

```javascript
app.use(express.static(__dirname + '/staticfiledirectory'));
```
The static middleware is a very useful tool. For simple static websites, it is sufficient to invoke the static middleware on the directory containing all of your pages and files and let the browser make requests based on that directory's file structure.

#### Instructions

You have a `/public` directory containing all the files your website needs with a structure:
```
public
public
├─page2
│  └─otherpage.html
├─index.html
├─styles.css
```
Use the express static middleware to serve your entire webpage.

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

// Enter code below this line

app.use(express.static(__dirname + '/public'));

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
```

