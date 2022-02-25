const express = require('express');
const router = express.Router();
const {createPressone,addDose,getInfoPersonneByCin}= require('../controllers/presonneController');

router.post('/',createPressone);
router.patch('/',addDose);
router.get('/',getInfoPersonneByCin);

module.exports = router;