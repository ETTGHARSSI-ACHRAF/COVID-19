const express = require('express');
const router = express.Router();
const {createPressone,getCountDoseByRegion}= require('../controllers/presonneController');
const {checkTokenAdmin} = require('../auth/checkToken');

router.post('/',createPressone);
router.get('/count',checkTokenAdmin,getCountDoseByRegion);

module.exports = router;