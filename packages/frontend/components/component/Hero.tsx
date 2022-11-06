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
          onTrack is an incentive accountability app that can you and your
          friends reach your goals! <br />
          our simple platform empowers your goal setting by rewarding you for
          completion.
        </Text>
        <Flex w={"full"}>
          <img
            style={{
              height: "28em",
              paddingLeft: "2em",
              margin: "auto",
              padding: "0",
              marginTop: "-30px",
            }}
            src={landing.src}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
