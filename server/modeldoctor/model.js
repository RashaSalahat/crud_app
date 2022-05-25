const mongoose = require('mongoose');

var schema = new mongoose.Schema({  //to define a shape and content of the doc
    name : {
        type : String,
        required: true
    },
    //
    password : {
        type: String,
        required: true,
    }
})

const Doctordb = mongoose.model('doctordbfinal', schema);

module.exports = Doctordb;