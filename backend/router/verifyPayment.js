const express=require('express');
const { verifyPayment } = require('../controller/verifyPayment');
const router=express.Router();

router.post("/verifypayment",verifyPayment);

module.exports=router;