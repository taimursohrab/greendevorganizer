var express = require('express');
const mongodb = require('mongodb');
var router = express.Router();

var Check = require('../models/Check.js');

// GET: Get all Checks
router.get('/', async (req, res) => {
  try{
    res.send(await Check.find({}).populate('checkFrom').populate('checkTo'));
  }
  catch(err){
    res.status(404).send();
  }
}); 

// GET: Get a specific check by id
router.get('/:id', async(req,res) => {
  try{
    res.send(await Check.findOne({_id: new mongodb.ObjectID(req.params.id)}.populate('checkFrom').populate('checkTo')));
  }
  catch(err){
    res.status(404).send();
  }
});

// POST: Create a new Check
router.post('/', async (req, res) => {
  try{
    // Create the new model, with parameters from req object
    var newCheck = new Check({
      checkNum : req.body.checkNum,
      amount : req.body.amount,
      dateWritten : new Date(req.body.dateWritten),
      datePosted : new Date(req.body.datePosted),
      checkFrom : new mongodb.ObjectID(req.body.checkFrom),
      checkTo : new mongodb.ObjectID(req.body.checkTo),
      memo : req.body.memo,
      notes : req.body.notes,
      imageURL : req.body.imageURL,
    });
    // Persist the model to the database
    await newCheck.save(function (err, check) {
      if (err) res.status(400).send(err);
      console.log(check + " saved to checks.");
    }); 
    // Return 201 successful
    res.status(201).send();
  } catch(err){
      //Return 400 not successful
      res.status(400).send(err);
  }
}); 

// PUT: Update an existing check (by id)
router.put('/', async(req, res) => {
  try{
    // Package the updated parameters
    const update = {
      checkNum : req.body.checkNum,
      amount : req.body.amount,
      dateWritten : new Date(req.body.dateWritten),
      datePosted : new Date(req.body.datePosted),
      checkFrom : new mongodb.ObjectID(req.body.checkFrom),
      checkTo : new mongodb.ObjectID(req.body.checkTo),
      memo : req.body.memo,
      notes : req.body.notes,
      imageURL : req.body.imageURL,
    }
    // Find and update the check
    await Check.findOneAndUpdate({_id: req.body._id}, update);
    // Return status 200 for success
    res.status(200).send();
  }
  catch(err){
    res.status(404).send();
  }
}); 

// DELETE: Delete an existing check (by id)
router.delete('/:id', async(req, res) => {
  try{
    await Check.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
  }
  catch(err){
    res.status(404).send();
  }
}); 

module.exports = router;