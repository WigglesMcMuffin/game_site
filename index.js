var path = require('path')
var express = require('express')
var webpack = require('webpack')
const opn = require('opn')
var app = express()

var port = process.env.PORT || 3000

app.use('/static', express.static('static'))

app.get(/api\/.*/, function(req, res) {
  console.log('API request received');
});

app.get(/.*/, function(req, res) {
  var options = {
    root: __dirname + '/static/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile('index.html', options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: index.html');
    }
  });
})

app.listen(port, function () {
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})
