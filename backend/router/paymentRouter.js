const express=require('express');
const { payment } = require('../controller/payment');
const router= express.Router();

router.post('/payment',payment);

module.exports=router;