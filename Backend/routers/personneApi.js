const express = require('express');
const router = express.Router();
const {createPressone,addDose,getInfoPersonneByCin,getCountDoseByRegion}= require('../controllers/presonneController');
const {checkTokenAdmin} = require('../auth/checkToken');

router.post('/',createPressone);
router.patch('/',addDose);
router.get('/',getInfoPersonneByCin);
router.get('/count',checkTokenAdmin,getCountDoseByRegion);

module.exports = router;