const express = require('express');
const router = express.Router();
const {createAdmin,loginAdmine,getAllAdmins}= require('../controllers/adminController');
const {checkTokenPdg} = require('../auth/checkToken');
router.post('/',checkTokenPdg,createAdmin);
router.post('/login',loginAdmine);
router.get('/',checkTokenPdg,getAllAdmins)



module.exports = router;