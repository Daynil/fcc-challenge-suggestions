var express = require('express');
var app = express();

app.get('/times42/:number', function(request, response) {
  var clientNumber = request.params.number;
  response.send('' + clientNumber*42);
});

app.listen(3000, function() {
    console.log('Serving on port 3000');
});