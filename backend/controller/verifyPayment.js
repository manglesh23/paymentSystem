const verifyPayment = async (req, res) => {
  res.status(200).json({ msg: "Payment Verified" });
};

module.exports = { verifyPayment };
