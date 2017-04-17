var express = require('express');
var api_router = express.Router();

api_router.get('/', function(req, res) {
	console.log('API function called');
	res.send('200 OK')
})

api_router.get('/game', function(req, res) {
	var Game = require('../models/Game.js');
	Game.findAll({
		where: {
			ready: true
		}
	}).then(function(results) {
		res.send(results)
	});
})

api_router.get('/game/:id', function(req, res) {
	var Game = require('../models/Game.js')
	Game.findById(req.params.id).then(function(game) {
		var location = '../games/'+game.id+'/js/main.js'
		console.log(location);
		var entry = require(location);
		console.log(entry.ps);
		res.send({entry: entry, game: game})
		//Fetch reference to game files, and send here
	})
})

module.exports = api_router
