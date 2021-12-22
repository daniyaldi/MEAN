const express = require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;
var {Employee} = require('../models/employee');

router.post('/',(req,res)=>{
    console.log("email",req.body)
    let email=req.body.email;
    let password=req.body.password;
   
    console.log("email2 ",email);
    console.log("password",password)
     Employee.findOne({email:email},(err,data)=>{
        console.log(data)
        if(data==null)
        {
            return res.status(200).send(false)
        }

        else{  
            if(data.password==password){
                return res.status(200).send(true)
            }
            else {
                return res.status(200).send(false)
            }
        }
    })

})
module.exports = router