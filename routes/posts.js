const express = require('express');
const router = require('express').Router();
const verify = require('./verifyToken');
const Contact = require('../model/User');


//gets back all contact
router.get('/contacts', verify,async (req, res)=>{
    try{
        const contact = await Contact.find();
        res.json(contact);

    }catch(err){
        res.json({message: err});
    }
});

//submit contact
router.get('/contacts',verify, async (req,res)=>{
    const contact =new Contact({
        name_contact : req.body.name_contact,
        email_contact : req.body.email_contact,
        ph_no_contact : req.body.ph_no_contact,
    });
    try{
    const savedContact =await contact.save();
    res.json(savedContact);
    }
    catch(err)
    {
        res.json({message : err});
    }
});

//Delete contact
router.delete('/:contactId',verify,async(req,res)=>{
    try{
        const removedContact = await Contact.remove({_id:req.params.contactId});
        res.json(removedContact);
    }catch(err) {
        res.json({message : err});
    }
   
});

//update a contact
router.patch('/:contactId',verify, async(req,res)=>{
    try{
        const updatedContact = await Contact.updateOne(
            {_id:req.params.ContactId},
            {
                 $set :{
                     name_contact : req.body.name_contact
             } }
            );
            res.json(updatedContact);
             
    }catch(err){
        res.json({message : err});
    }
});


module.exports = router;