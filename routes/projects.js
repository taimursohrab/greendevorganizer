var express = require('express');
const mongodb = require('mongodb');
var router = express.Router();

var Project = require('../models/Project.js');

// GET: Get all Projects
router.get('/', async(req, res) => {
  try{
    res.send(await Project.find({}).populate('owner'));
  }
  catch(err){
    res.status(404).send();
  }
}); 

// GET: Get a specific project by id
router.get('/:id', async(req,res) => {
  try{
    res.send(await Project.findOne({_id: new mongodb.ObjectID(req.params.id)}));
  }
  catch(err){
    res.status(404).send();
  }
});

// POST: Create a new Project
router.post('/', async (req, res) => {
  try{
    // Create the new model, with parameters from req object
    var newProject = new Project({
        name : req.body.name,
        owner: new mongodb.ObjectID(req.body.owner),
        address : req.body.address,
        desc: req.body.desc
    });
    // Persist the model to the database
    await newProject.save(function (err, project) {
      if (err) res.status(400).send(err);
      console.log(project + " saved to projects.");
    }); 
    // Return 201 successful
    res.status(201).send();
  } catch(err){
      //Return 400 not successful
      res.status(400).send(err);
  }
}); 

// PUT: Update an existing project (by id)
router.put('/', async(req, res) => {
  try{
    // Package the updated parameters
    const update = {
      name: req.body.name,
      owner: new mongodb.ObjectID(req.body.owner),
      address: req.body.address,
      desc: req.body.desc
    }
    // Find and update the project
    await Project.findOneAndUpdate({_id: req.body._id}, update);
    // Return status 200 for success
    res.status(200).send();
  }
  catch(err){
    res.status(404).send();
  }
}); 

// DELETE: Delete an existing project (by id)
router.delete('/:id', async(req, res) => {
  try{
    await Project.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
  }
  catch(err){
    res.status(404).send();
  }
}); 

module.exports = router;