const Sequelize = require('sequelize')

var sequelize = new Sequelize('postgres://postgres:password@localhost/web_games')

sequelize
	.authenticate()
	.then(function(err) {
		console.log('Connection has been established successfully.');
	})
	.catch(function (err) {
		console.log('Unable to connect to the database:', err);
	});

module.exports = sequelize
