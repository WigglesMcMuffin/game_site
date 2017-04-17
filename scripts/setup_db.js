var sequelize = require('../db.js')
var Game = require('../models/Game.js')

sequelize.sync({force: true}).then(function() {
	var mario_clone = Game.create({name: 'Mario Clone', description: 'A simple mario clone', ready: true})
});
