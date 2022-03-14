const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");



const createAdmin = async (req, res) => {
    try {
        const admin = new Admin({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: req.body.password,
            id_region: req.body.id_region,
        });
        const newAdmin = await admin.save();
        res.status(200).json({
            success: 1,
            newAdmin
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const loginAdmine = async (req, res) => {
    try {
        const admin = await Admin.find({ email: req.body.email });
        if (admin.length !== 0) {
            const comparePassword = bcrypt.compareSync(
                req.body.password,
                admin[0].password
            );
            if (comparePassword) {
                admin[0].password = undefined;
                const token = jsonwebtoken.sign(
                    { result: admin[0] },
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

const getAllAdmins = async (req, res) => {
    try {
        const Admins = await Admin.find();
        res.status(200).json({
            success: 1,
            Admins
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

module.exports = {
    createAdmin,
    loginAdmine,
    getAllAdmins
}