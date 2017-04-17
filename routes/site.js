var express = require('express');
var path = require('path')
var site_router = express.Router();

site_router.get(/.*/, function(req, res) {
  var options = {
    root: path.normalize(path.join(__dirname, '..', 'static/')),
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

module.exports = site_router
