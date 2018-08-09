var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('sent from prasad branch!');
  res.send('hi welcome to devops');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log('demo message');
});
