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
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`);
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in retriving employee :' +JSON.stringify(err,undefined,2));
    }
    })
})
router.post('/',(req,res)=>{
    var emp = new Employee({
        email: req.body.email,
        password: req.body.password,
    })
    emp.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
    })
})


module.exports = router;