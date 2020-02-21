var express = require('express');
const mongodb = require('mongodb');
var router = express.Router();

var Company = require('../models/Company.js');

// GET: Get all Companies
router.get('/', async (req, res) => {
    try{
      res.send(await Company.find({}).populate('employees'));
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  // GET: Get a specific company by id
  router.get('/:id', async(req,res) => {
    try{
      res.send(await Company.findOne({_id: new mongodb.ObjectID(req.params.id)}.populate('employees')));
    }
    catch(err){
      res.status(404).send();
    }
  });
  
  // POST: Create a new Company
  router.post('/', async (req, res) => {
    try{
      let employees;

      if (req.body.employees.length > 0){
        employees = req.body.employees.map(employee => new mongodb.ObjectID(employee.id));
      }

      // Create the new model, with parameters from req object
      var newCompany = new Company({
        name : req.body.name,
        phoneNumber : req.body.phoneNumber,
        address: req.body.address,
        desc : req.body.desc,
        employees : employees
      });       
          
      // Persist the model to the database
      await newCompany.save(function (err, company) {
        if (err) res.status(400).send(err);
        console.log(company + " saved to companies.");
      }); 
      // Return 201 successful
      res.status(201).send();
    } catch(err){
        //Return 400 not successful
        res.status(400).send(err);
    }
  }); 
  
  // PUT: Update an existing company (by id)
  router.put('/', async(req, res) => {
    try{
      let employees;

      if (req.body.employees.length > 0){
        employees = req.body.employees.map(employee => new mongodb.ObjectID(employee.id));
      }
      // Package the updated parameters
      const update = {
          name : req.body.name,
          phoneNumber : req.body.phoneNumber,
          address: req.body.address,
          desc : req.body.desc,
          employees : employees
      }
      // Find and update the company
      await Company.findOneAndUpdate({_id: req.body._id}, update);
      // Return status 200 for success
      res.status(200).send();
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  // DELETE: Delete an existing company (by id)
  router.delete('/:id', async(req, res) => {
    try{
      await Company.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
      res.status(200).send();
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  module.exports = router;