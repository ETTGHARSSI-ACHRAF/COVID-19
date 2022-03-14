const Pdg = require("../models/pdgModel");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");



const createPdg = async (req, res) => {
    try {
        const pdg = new Pdg({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: req.body.password,
        });
        const newPdg = await pdg.save();
        res.status(200).json({
            success: 1,
            newPdg
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const loginPdg = async (req, res) => {
    try {
        const pdg = await Pdg.find({ email: req.body.email });
        if (pdg.length !== 0) {
            const comparePassword = bcrypt.compareSync(
                req.body.password,
                pdg[0].password
            );
            if (comparePassword) {
                pdg[0].password = undefined;
                // console.log(pdg[0]);
                const token = jsonwebtoken.sign(
                    { result: pdg[0] },
                    
                    process.env.SECRET_KEY_ADMIN,
                    {
                        expiresIn: "24h",
                    }
                );
                res.status(200).json({
                    success: 1,
                    token: token,
                });
            } else {
                res.status(200).json({
                    success: 0,
                    message: "passwor or email incorrect1",
                });
            }
        } else {
            res.status(401).json({
                success: 0,
                message: "passwor or email incorrect2",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}



module.exports = {
    createPdg,
    loginPdg
}