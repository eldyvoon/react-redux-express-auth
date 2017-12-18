'use strict'

module.exports = function(app) {
	const userController = require('../controllers/userController.js')

	app.route('/auth/signup')
		.post(userController.signup)

	app.route('/auth/login')
		.post(userController.login)

	app.route('/auth/forgot-password')
		.post(userController.forgotPassword)

	app.route('/auth/user')
		.get(userController.getUser)
}