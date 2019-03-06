var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output" : "Hello World! i m on staging"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output" : "Hello World! me on staging"
  });
});

app.listen(port);
module.exports = app;
