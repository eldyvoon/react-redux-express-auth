'use strict'

module.exports = function(app) {
	const adController = require('../controllers/adController.js')

	//writer
	app.route('/ads')
		.get(adController.getAds)

	app.route('/ad/:id')
		.get(adController.getAd)

	app.route('/ad/apply')
		.put(adController.applyAd)

	app.route('/ad/submit')
		.put(adController.submitAd)

	//business
	app.route('/ad/create')
		.post(adController.createAd)

/*	app.route('/ad/edit')
		.put(adController.editAd)

	app.route('/ad/delete')
		.delete(adController.deleteAd)*/
}