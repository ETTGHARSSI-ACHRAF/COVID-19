const mongoose = require('mongoose');

const pdgSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'pdg'
    },

});
module.exports = mongoose.model('pdg',pdgSchema); 