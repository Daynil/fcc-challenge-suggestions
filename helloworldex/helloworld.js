var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('<p>Hello World!</p>');
});

app.get('/bighello', function(request, response) {
    response.send('<h1>Big Hello!!</h1>');
});

app.listen(3000, function() {
    console.log('Serving on port 3000');
});