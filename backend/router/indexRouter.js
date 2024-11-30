const express = require("express");
const router = express.Router();
const paymentRouter = require("./paymentRouter");
const verifyPaymentRouter=require("./verifyPayment");
router.use("/payment", paymentRouter);
router.use("/payment",verifyPaymentRouter);

module.exports = router;
