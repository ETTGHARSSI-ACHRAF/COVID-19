const express = require('express');
const router = express.Router();
const {createCentre,getCentreByRegion,deleteCentre,updateCentre,getCentreByRegionAdmin}= require('../controllers/centreController');
const {checkTokenAdmin} = require('../auth/checkToken');
router.post('/',checkTokenAdmin,createCentre);
router.get('/',checkTokenAdmin,getCentreByRegionAdmin);
router.get('/:id',getCentreByRegion);
router.delete('/:id',checkTokenAdmin,deleteCentre);
router.patch('/:id',checkTokenAdmin,updateCentre);

module.exports = router;