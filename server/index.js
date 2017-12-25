'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const mongoose = require('mongoose')

//mongoose model
require('./api/models/userModel')
require('./api/models/adModel')

const bodyParser = require('body-parser')
const jsonwebtoken = require("jsonwebtoken")

require('dotenv').config();

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.DB_HOST}`)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization) {
    
    jsonwebtoken.verify(req.headers.authorization, 'xx__secret__xx', function(err, decode) {
      if (err) req.user = false
      req.user = decode
      next()
    })
  } else {
    req.user = false
    next()
  }
})

require('./api/routes/user')(app)
require('./api/routes/ad')(app)

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})

app.listen(port)

console.log('Server started on: ' + port)

module.exports = app