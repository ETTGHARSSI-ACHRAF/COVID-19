const express = require('express');
const router = express.Router();
const {createRegion,getAllRegion}= require('../controllers/regionController');

router.post('/',createRegion);
router.get('/',getAllRegion);


module.exports = router;