const mongoose = require('mongoose');

const presonneSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },
    cin:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
        required:true
    },
    ville:{
        type:String,
        required:true
    },
    maladie:{
        type:String,
    },
    traitemnet:{
        type:String,
    },
    date_naise:{
        type:Date,
        required:true
    },
    dose: [],
});
module.exports = mongoose.model('presonne',presonneSchema);