var path = require('path')
var express = require('express')
var db = require('./db.js')
var webpack = require('webpack')
const opn = require('opn')
var app = express()
var api = require('./routes/api.js')
var site = require('./routes/site.js')

var port = process.env.PORT || 3000

var api_router = api

var site_router = site;

app.use('/static', express.static('static'));

app.use('/api', api_router);

app.use('/', site_router);

app.listen(port, function () {
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})
