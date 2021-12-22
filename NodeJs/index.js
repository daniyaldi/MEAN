const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db.js');
const cors = require('cors');
var loginController=require('./controllers/loginController.js')
var employeeController=require('./controllers/employeeController.js')
var dashboardController=require('./controllers/dashboard.js')
var app=express();
app.use(bodyParser.json());
app.use(cors({origin : "http://localhost:4200"}))
app.listen(3000,()=> console.log('Server started at port : 3000'));
app.use('/employee',employeeController);
app.use('/login',loginController);
app.use('/dashboard',dashboardController)
