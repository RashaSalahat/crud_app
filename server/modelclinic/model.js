const mongoose = require('mongoose');

var schema = new mongoose.Schema({  //to define a shape and content of the doc
    name : {
        type : String,
        required: true
    },
    doctor : {
        type: String,
        
    },
    country : {
        type: String,
        
    },
    address : {
        type: String,
        
    },
    information: String,
    status : String
})

const Clinicdb = mongoose.model('clinicdbfinal', schema);

module.exports = Clinicdb;