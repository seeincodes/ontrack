import React, { useState } from "react";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import router from "next/router";
import Vault from "../../pages/vault/vault";

import { useToast } from "@chakra-ui/react";

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
        fontFamily="Montserrat"
      >
        Contract Creation
      </Heading>
      <Flex>
        <FormControl>
          <FormLabel
            htmlFor="name"
            fontWeight={"normal"}
            fontFamily="Montserrat"
          >
            Name
          </FormLabel>
          <Input id="name" placeholder="Name" />
        </FormControl>
      </Flex>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input placeholder="What's your goal?" />
      </FormControl>
    </>
  );
};

const Form2 = () => {
  const [startValue, startOnChange] = useState(new Date());
  const [endValue, endOnChange] = useState(new Date());
  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
        fontFamily="Montserrat"
      >
        What's your timeline?
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          fontFamily="Montserrat"
        >
          Start Date
        </FormLabel>
        <DatePicker onChange={startOnChange} value={startValue} />

        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          fontFamily="Montserrat"
        >
          End Date
        </FormLabel>
        <DatePicker onChange={endOnChange} value={endValue} />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        fontFamily="Montserrat"
      >
        Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            fontFamily="Montserrat"
          >
            What's your interest rate?
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="tel"
              placeholder="5-15%"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Who is joining you?
          </FormLabel>
          <Textarea
            placeholder="0x....."
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Add all the crypto addresses of the joining parties!
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const submit = () => {
    toast({
      title: "Agreement created.",
      description: "We've created your agreement for you!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    router.push("/");
    Vault();
  };
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        background="linear-gradient(85deg, #FFEEE6 5%, #B2B0CC 35%, #B0CCC0 45%)"
      >
        <Progress
          colorScheme="whiteAlpha"
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="teal"
                variant="solid"
                onClick={() => submit()}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
