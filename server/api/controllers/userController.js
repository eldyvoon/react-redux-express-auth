'use strict'

const crypto = require('crypto')
const async = require('async')
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = mongoose.model('User')

exports.getUser = function(req, res) {
  User.findOne({_id: req.query.id}, function(err, user) {
    if (err) {
      return res.status(400).send({
        msg: err
      })
    } else {
      user.hash_password = false
      return res.json({status: 1, data: jwt.sign({ email: user.email, fullName: user.fullName, role: user.role, _id: user._id }, 'xx__secret__xx')})
    }
  })
}

exports.signup = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if(user){
      return res.status(400).send({
        msg: 'Email address is already taken!'
      })
    }

    const newUser = new User(req.body)
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
    newUser.save(function(err, user) {
      if (err) {
        return res.status(400).send({
          msg: err
        })
      } else {
        user.hash_password = false
        return res.json({status: 1, data: jwt.sign({ email: user.email, fullName: user.fullName, role: user.role, _id: user._id }, 'xx__secret__xx')})
      }
    })
  })
}

exports.login = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(400).json({ msg: 'Invalid email or password!' })
    }
    return res.json({status: 1, data: jwt.sign({ email: user.email, fullName: user.fullName, role: user.role, _id: user._id }, 'xx__secret__xx') })
  })
}

exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next()
  } else {
    return res.status(401).json({ msg: 'Unauthorized user!' })
  }
}

exports.forgotPassword = function(req, res, next) {
  if(!req.body.email){
    return res.send({ msg: 'The email is required!' });
  }

  async.waterfall([
    function(done) {
      crypto.randomBytes(16, function(err, buf) {
        const token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          return res.status(400).send({ msg: 'The email address ' + req.body.email + ' is not associated with any account.' });
        }
        user.passwordResetToken = token;
        user.passwordResetExpires = Date.now() + 3600000; // expire in 1 hour
        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {

      const sendgrid_options = {
        auth: {
          api_key: process.env.SENDGRID_KEY
        }
      }

      const sendgrid_cilent = nodemailer.createTransport(sgTransport(sendgrid_options));
      const email_content = {
        from: process.env.HOST_EMAIL,
        to: user.email,
        subject: 'Reset Password Request',
        text: 'You are receiving this email because you have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + req.headers.host + '/reset/' + token + '\n\n'
      };

      sendgrid_cilent.sendMail(email_content, function(err, info){
          if (err){
            console.log(err);
          }
          else {
            res.json({status: 1, data: 'An email has been sent to ' + user.email + ' with further instructions.' });
          }
      });
    }
  ]);
};
