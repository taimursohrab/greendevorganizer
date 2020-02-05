var express = require('express');
var router = express.Router();
var models = require('../models/Models.js');

router.post('/project', function(req, res) {
    var newProject = new models.Project({
        name : req.body.name,
        owner: req.body.owner,
        address : req.body.address,
        desc: req.body.desc
    });
    newProject.save(function (err, project) {
        if (err) return console.error(err);
        console.log(project + " saved to projects.");
      }); 
    res.redirect('../');
  }); 

  router.post('/person', function(req, res) {
    var newPerson = new models.Person({
        name : req.body.name,
        companies : req.body.companies,
        phoneNumber: req.body.phoneNumber,
    });
    newPerson.save(function (err, person) {
        if (err) return console.error(err);
        console.log(person + " saved to people.");
      }); 
    res.redirect('../');
  }); 

module.exports = router;