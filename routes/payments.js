var express = require('express');
const mongodb = require('mongodb');
var router = express.Router();

var Payment = require('../models/Payment.js');

// GET: Get all Payments
router.get('/', async (req, res) => {
    try{
      res.send(await Payment.find({}));
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  // GET: Get a specific payment by id
  router.get('/:id', async(req,res) => {
    try{
      res.send(await Payment.findOne({_id: new mongodb.ObjectID(req.params.id)}));
    }
    catch(err){
      res.status(404).send();
    }
  });
  
  // POST: Create a new Payment
  router.post('/', async (req, res) => {
    try{
      // Create the new model, with parameters from req object
          
          
      // Persist the model to the database
      await newPayment.save(function (err, payment) {
        if (err) res.status(400).send(err);
        console.log(payment + " saved to payments.");
      }); 
      // Return 201 successful
      res.status(201).send();
    } catch(err){
        //Return 400 not successful
        res.status(400).send(err);
    }
  }); 
  
  // PUT: Update an existing payment (by id)
  router.put('/', async(req, res) => {
    try{
      // Package the updated parameters
      const update = {
              
      }
      // Find and update the payment
      await Payment.findOneAndUpdate({_id: req.body._id}, update);
      // Return status 200 for success
      res.status(200).send();
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  // DELETE: Delete an existing payment (by id)
  router.delete('/:id', async(req, res) => {
    try{
      await Payment.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
      res.status(200).send();
    }
    catch(err){
      res.status(404).send();
    }
  }); 
  
  module.exports = router;