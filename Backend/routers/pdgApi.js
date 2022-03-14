const express = require('express');
const router = express.Router();
const {createPdg,loginPdg}= require('../controllers/pdgController');

router.post('/',createPdg);
router.post('/login',loginPdg);



module.exports = router;