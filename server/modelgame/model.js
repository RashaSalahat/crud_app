const mongoose = require('mongoose');

var schema = new mongoose.Schema({  //to define a shape and content of the doc
    name : {
        type : String,
        required: true
    },
    describtion : {
        type: String,
        required: true,
    },
    type : String,
    stores : String
})

const Gamedb = mongoose.model('gamedb', schema);

module.exports = Gamedb;