const Region = require("../models/regionModel");




const createRegion = async (req, res) => {
    try {
        const region = new Region({
            nom: req.body.nom,
        });
        const newRegion = await region.save();
        res.status(200).json({
            success: 1,
            newRegion
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getAllRegion = async (req, res) => {
    try {
        const region = await Region.find();
        res.status(200).json({
            success: 1,
            region,
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}
const deleteRegion = async (req,res) =>{
    try{
        const region = await Region.remove({_id:req.params.id})
        res.status(200).json({
         success:1,
         region
     });
     }catch(error){
         res.status(400).json({
             success : 0,
             message:error.message
         })
}
}
module.exports = {
    createRegion,
    getAllRegion,
    deleteRegion
}