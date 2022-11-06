import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import landing from "../../public/landing.jpg";

export default function Hero() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          fontFamily="'Montserrat', sans-serif"
        >
          we help you stay{" "}
          <Text
            as={"span"}
            color={"orange.400"}
            fontFamily="'Montserrat', sans-serif"
          >
            onTrack
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} fontFamily="'Mina', sans-serif">
          onTrack is an incentivized accountability platform where you can set
          up your goals to help keep you and your friends motivated. The
          platform is user-friendly and backed by the DeFi staking protocol.
          <br />
          Our aim is to empower you to take control of your accomplishments
          while having the support and inspiration from your buddies.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <img
            style={{
              height: "28em",
              paddingLeft: "2em",
              margin: "auto",
              padding: "0",
              marginTop: "0",
            }}
            src={landing.src}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
