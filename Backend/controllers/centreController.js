const Centre = require("../models/centreModel");




const createCentre = async (req, res) => {
    try {
        const centre = new Centre({
            nom: req.body.nom,
            adresse:req.body.adresse,
            id_region: req.region
        });
        const newCentre = await centre.save();
        res.status(200).json({
            success: 1,
            newCentre
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getCentreByRegionAdmin = async (req, res) => {
    try {
        const centre = await Centre.find({id_region:req.region});
        res.status(200).json({
            success: 1,
            centre,
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}
// foor client
const getCentreByRegion = async (req, res) => {
    try {
        const centre = await Centre.find({id_region:req.params.id});
        res.status(200).json({
            success: 1,
            centre,
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const deleteCentre = async (req,res) =>{
    try{
        const centre = await Centre.remove({_id:req.params.id})
        res.status(200).json({
         success:1,
         centre
     });
     }catch(error){
         res.status(400).json({
             success : 0,
             message:error.message
         })
     }
}

const updateCentre = async (req,res) =>{
    const newDAtaCentre= {
        nom:req.body.nom,
        adresse:req.body.adresse
    };
    try{
       const centre = await Centre.updateOne({_id:req.params.id},newDAtaCentre);
       res.status(200).json({
        success:1,
        centre
    });
    }catch(error){
        res.status(400).json({
            success : 0,
            message:error.message
        })
    }
}

module.exports = {
    createCentre,
    getCentreByRegion,
    deleteCentre,
    updateCentre,
    getCentreByRegionAdmin
}