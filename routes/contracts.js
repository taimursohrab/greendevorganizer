var express = require('express');
const mongodb = require('mongodb');
var router = express.Router();

var Contract = require('../models/Contract.js');

// GET: Get all Contracts
router.get('/', async (req, res) => {
    try{
      res.send(await Contract.find({}));
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  // GET: Get a specific contract by id
  router.get('/:id', async(req,res) => {
    try{
      res.send(await Contract.findOne({_id: new mongodb.ObjectID(req.params.id)}));
    }
    catch(err){
      res.status(404).send();
    }
  });
  
  // POST: Create a new Contract
  router.post('/', async (req, res) => {
    try{
      // Create the new model, with parameters from req object
          
          
      // Persist the model to the database
      await newContract.save(function (err, contract) {
        if (err) res.status(400).send(err);
        console.log(contract + " saved to contracts.");
      }); 
      // Return 201 successful
      res.status(201).send();
    } catch(err){
        //Return 400 not successful
        res.status(400).send(err);
    }
  }); 
  
  // PUT: Update an existing contract (by id)
  router.put('/', async(req, res) => {
    try{
      // Package the updated parameters
      const update = {
              
      }
      // Find and update the contract
      await Contract.findOneAndUpdate({_id: req.body._id}, update);
      // Return status 200 for success
      res.status(200).send();
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  // DELETE: Delete an existing contract (by id)
  router.delete('/:id', async(req, res) => {
    try{
      await Contract.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
      res.status(200).send();
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  module.exports = router;