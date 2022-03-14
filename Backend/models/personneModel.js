const mongoose = require('mongoose');

const presonneSchema = new mongoose.Schema({
    CIN: {
        type: String,
        required: true
      },
      adress: {
        type: String,
        required: true
      },
    
      tel: {
        type: Number,
        required: true,
        default: 0
      },
      age: {
        type: Number,
        required: true,
        default: 0
      },
      dose: [{
        type:String,
      }, ],
      maladie: {
        type: String,
    
      },
      traitement: {
        type: String,
    
      },
      effetsecSeconddose:{
        type:String
      },
      effetsecFirstdose:{
        type:String
      },
      id_region:{
        type:mongoose.Schema.ObjectId, 
        ref: 'region'
    },
    id_centre:{
        type:mongoose.Schema.ObjectId, 
        ref: 'centre'
    },
      date:{
        type: Date,
        default: Date.now,
      },

});
module.exports = mongoose.model('presonne',presonneSchema);