import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Flex,
} from "@chakra-ui/react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    address: "",
    panCardNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    // Add logic to send data to your backend here
  };

  return (
    <div>
      <Box bg="gray.200" justifyContent="center" borderRadius="10px">
        <Box
          p={5}
          width="300px"
          height="600px"
          mt="50px"
          borderWidth="2px"
          borderRadius="40px"
          bg="gray.50"
          style={{ backgroundColor: "#f0f4f8" }}
          justifyContent="center"
          // display="flex"
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={2} flex="1">
              <FormControl isRequired>
                <FormLabel color="teal.600">Name</FormLabel>
                <Input
                  borderWidth="2px"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="teal.600">Mobile Number</FormLabel>
                <Input
                  borderWidth="2px"
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter your mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl color="teal.600">
                <FormLabel>Address</FormLabel>
                <Textarea
                  borderWidth="2px"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="teal.600">PAN Card Number</FormLabel>
                <Input
                  borderWidth="2px"
                  type="text"
                  name="panCardNumber"
                  placeholder="Enter your PAN Card number"
                  value={formData.panCardNumber}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="teal.600">Occupation</FormLabel>
                <Input
                  borderWidth="2px"
                  type="text"
                  name="Occupation"
                  placeholder="Enter your Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </FormControl>
              <Flex justify="flex-end">
                <Button
                  type="submit"
                  colorScheme="white"
                  bg="teal.400"
                  _hover={{ bg: "teal.500" }}
                  width="200px"
                  height="40px"
                  size="lg"
                  mt="auto"
                  margin={12}
                >
                  Submit
                </Button>
              </Flex>
            </VStack>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Form;
