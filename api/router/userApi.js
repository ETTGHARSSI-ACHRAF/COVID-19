const router = require('express').Router();
const {
    createFormulair,
    getCountDoseByRegion
} = require('../controllers/userController')
const {checkTokenAdmin} = require('../auth/checkToken');

router.post('/createData',createFormulair);
router.get('/count',checkTokenAdmin,getCountDoseByRegion);



module.exports = router;