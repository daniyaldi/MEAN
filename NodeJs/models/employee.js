const mongoose = require ('mongoose');
var Employee = mongoose.model('Employee', {
    email : {type:String},
    password : {type:String},
})

module.exports = {Employee};