const { count } = require("../models/personneModel");
const Personne = require("../models/personneModel");



// autantification admin
const createPressone = async (req, res) => {
    try {
        const personne = new Personne({
            nom: req.body.nom,
            prenom: req.body.prenom,
            cin: req.body.cin,
            adresse: req.body.adresse,
            ville: req.body.ville,
            maladie: req.body.maladie,
            traitemnet: req.body.traitemnet,
            date_naise: req.body.date_naise,
            id_region:req.body.region,
            id_centre:req.body.centre,
            dose: 1
        });
        const newPersonne = await personne.save();
        res.status(200).json({
            success: 1,
            newPersonne
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}
const addDose = async (req, res) => {
    try {
        const personne = await Personne.updateOne(
            { cin: req.body.cin },
            { $push: { dose: req.body.dose } }
        );
        res.status(200).json({
            success: 1,
            personne,
        });

    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }

}

const getInfoPersonneByCin = async (req, res) => {
    try {
        const personne = await Personne.find({ cin: req.body.cin });
        res.status(200).json({
            success: 1,
            personne,
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getCountDoseByRegion = async (req, res) => {
    try {
        const count ={
            dose1:0,
            dose2:0,
            dose3:0
        }
        const personnes = await Personne.find({id_region:req.region});
        personnes.forEach(element => {
            if((element.dose).length===3){
                count.dose3=count.dose3+1
                count.dose2=count.dose2+1
                count.dose1=count.dose1+1
            }else if((element.dose).length===2){
                count.dose2=count.dose2+1
                count.dose1=count.dose1+1
            }else if((element.dose).length===1){
                count.dose1=count.dose1+1
            }
        })
        res.status(200).json({
            success: 1,
            count
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}


module.exports = {
    createPressone,
    addDose,
    getInfoPersonneByCin,
    getCountDoseByRegion
};
