const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
    id_region:{
        type:mongoose.Schema.ObjectId, 
        ref: 'region'
    },
    role:{
        type:String,
        default:'admin'
    },
});
module.exports = mongoose.model('admin',adminSchema);