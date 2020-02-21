var express = require('express');
const mongodb = require('mongodb');
var router = express.Router();

var Person = require('../models/Person.js');

// GET: Get all People
router.get('/', async (req, res) => {
  try{
    res.send(await Person.find({}));
    
  }
  catch(err){
    res.status(404).send();
  }
}); 

// GET: Get a specific person by id
router.get('/:id', async(req,res) => {
  try{
    res.send(await Person.findOne({_id: new mongodb.ObjectID(req.params.id)}.populate('companies')));
  }
  catch(err){
    res.status(404).send();
  }
});

// POST: Create a new Person
router.post('/', async (req, res) => {
  try{
    // Create the new model, with parameters from req object
    var newPerson = new Person({
        name : req.body.name,
        phoneNumber : req.body.phoneNumber,
        desc : req.body.desc
    });
    // Persist the model to the database
    await newPerson.save(function (err, person) {
      if (err) res.status(400).send(err);
      console.log(person + " saved to people.");
    }); 
    // Return 201 successful
    res.status(201).send();
  } catch(err){
      //Return 400 not successful
      res.status(400).send(err);
  }
}); 

// PUT: Update an existing person (by id)
router.put('/', async(req, res) => {
  try{
    // Package the updated parameters
    const update = {
      name : req.body.name,
      phoneNumber : req.body.phoneNumber,
      desc: req.body.desc
    }
    // Find and update the person
    await Person.findOneAndUpdate({_id: req.body._id}, update);
    // Return status 200 for success
    res.status(200).send();
  }
  catch(err){
    res.status(404).send();
  }
}); 

// DELETE: Delete an existing person (by id)
router.delete('/:id', async(req, res) => {
  try{
    await Person.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
  }
  catch(err){
    res.status(404).send();
  }
}); 

module.exports = router;