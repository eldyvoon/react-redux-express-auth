const mongoose = require('mongoose')
const Ad = mongoose.model('ad')

exports.getAds = function(req, res) {
    Ad.find({}, function(err, result) {
    if (err) {
      return res.status(400).send({
        msg: err
      })
    }
    return res.json({status: 1, data: result})
  })
}

exports.getAd = function(req, res) {
    Ad.findOne({_id: req.params.id}, function(err, result) {
    if (err) {
      return res.status(400).send({
        msg: err
      })
    }
    return res.json({status: 1, data: result})
  })
}

exports.createAd = function(req, res) {
  const newAd = new Ad(req.body)
  newAd.save(function(err, result) {
    if (err) {
      return res.status(400).send({
        msg: err
      })
    }
    
    return res.json({status: 1, data: result})
  })
}