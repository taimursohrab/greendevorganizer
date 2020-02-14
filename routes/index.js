var express = require('express');
var router = express.Router();

var Company = require('../models/Company.js');
var Person = require('../models/Person.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:"Green Developers Organizer"});
});

/* GET project creation page. */
router.get('/project', function(req, res, next) {
  Person.find({}).then(function (people) {
    Company.find({}).then(function (companies) {
      res.render('createproject', {title:"Green Developers Organizer", people: people, companies: companies});
    });
  });
});

/* GET person creation page. */
router.get('/person', function(req, res, next) {
  Company.find({}).then(function (companies) {
    res.render('createperson', {title:"Create a new person", companies: companies});
  });
});

module.exports = router;
