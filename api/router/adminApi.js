const express = require('express');
const router = express.Router();
const {createAdmin,loginAdmine}= require('../controllers/adminController');

router.post('/',createAdmin);
router.post('/login',loginAdmine);



module.exports = router;