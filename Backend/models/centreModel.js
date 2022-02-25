const mongoose = require('mongoose');

const centreSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
        required:true
    },
    id_region:{
        type:mongoose.Schema.ObjectId, 
        ref: 'region'
    },
});
module.exports = mongoose.model('centre',centreSchema);