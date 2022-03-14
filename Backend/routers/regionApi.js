const express = require('express');
const router = express.Router();
const {createRegion,getAllRegion,deleteRegion}= require('../controllers/regionController');
const {checkTokenPdg} = require('../auth/checkToken');

router.post('/',checkTokenPdg,createRegion);
router.get('/',getAllRegion);
router.delete('/:id',checkTokenPdg,deleteRegion);


module.exports = router;