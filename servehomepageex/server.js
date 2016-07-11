var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/myhomepage.html');
});

app.get("/about", function (request, response) {
  response.sendFile(__dirname + '/aboutpage.html');
});

app.listen(3000, function() {
    console.log('Serving on port 3000');
});