const express = require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;
var {Employee} = require('../models/employee');
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){
        res.send(docs);
    }
    else
    (console.log('error retriveing Employees : '+ JSON.stringify(err,undefined,2)))
    })
});
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`)
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            (console.log('error deleting Employee : '+ JSON.stringify(err,undefined,2)))

        }
    })
})

router.put('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`);
    var emp={
        email: req.body.email,
        password: req.body.password,
    };
    Employee.findByIdAndUpdate(req.params.id,{ $set:emp },{new:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            (console.log('error updating Employee : '+ JSON.stringify(err,undefined,2)))
        }
    })
})
module.exports = router