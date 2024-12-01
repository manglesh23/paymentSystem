import { React, useState } from "react";
import {  Box, Heading, Button, Text, useToast } from "@chakra-ui/react";

const Payment = () => {
  const [orderId, setOrderId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");

  const createOrder = async () => {
    try {
      const response = await fetch(
        "http://localhost:7000/payment/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 1000, // Amount in INR
            currency: "INR",
            receipt: "order_rcptid_11", // Unique identifier
          }),
        }
      );

      const data = await response.json();
      console.log("Create Order:-",data)
      setOrderId(data.id);
      openRazorpayCheckout(data.id, data.amount, data.currency);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const openRazorpayCheckout = (orderId, amount, currency) => {
    console.log("Razorpay checkout")
    const options = {
      key: "rzp_test_FgDeQOasYdxuEs", // Razorpay Key ID
      amount, // Amount in paise
      currency,
      order_id: orderId,
      name: "E-Commerce App",
      description: "Test Transaction",
      handler: async (response) => {
        console.log("Payment successful Handle Response:-", response);
        await verifyPayment(response);
      },
      prefill: {
        name: "Test User",
        email: "test.user@example.com",
        contact: "8084377799",
      },
      theme: {
        color: "#3399cc",
      },
    };
    console.log("open razorpay")
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const verifyPayment = async (paymentDetails) => {
    try {
      console.log("Payment Verification")
      const response = await fetch(
        "http://localhost:7000/payment/verifypayment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentDetails),
        }
      );

      const data = await response.json();
      if (data.success) {
        setPaymentStatus("Payment Verified Successfully!");
      } else {
        setPaymentStatus("Payment Verification Failed!");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      setPaymentStatus("Payment Verification Failed!");
    }
  };

  return (
    <Box textAlign="center" py={10} px={6}>
    <Heading as="h3" size="xl" mb={6}>
      Razorpay Payment Integration
    </Heading>
    <Button
      colorScheme="blue"
      size="lg"
      onClick={createOrder}
      mb={6}
    >
      Pay
    </Button>
    {paymentStatus && (
      <Text
        fontSize="lg"
        color={paymentStatus.includes("Failed") ? "red.500" : "green.500"}
        mt={6}
      >
        {paymentStatus}
      </Text>
    )}
  </Box>
  );
};

export default Payment;
