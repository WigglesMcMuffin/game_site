var sequelize = require('../db.js')
var Sequelize = require('sequelize')

var Game = sequelize.define('game', {
	name: Sequelize.STRING,
	description: Sequelize.TEXT,
	ready: Sequelize.BOOLEAN,
  storageLink: Sequelize.STRING,
})

module.exports = Game
