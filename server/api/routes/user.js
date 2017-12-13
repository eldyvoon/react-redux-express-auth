'use strict'

module.exports = function(app) {
	const userController = require('../controllers/userController.js')

	app.route('/auth/register')
		.post(userController.register)

	app.route('/auth/login')
		.post(userController.login)
}