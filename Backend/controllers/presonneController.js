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


module.exports = {
    createPressone,
    addDose,
    getInfoPersonneByCin
};
