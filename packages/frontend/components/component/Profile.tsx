import React, { useState } from "react";

import { WidgetProps } from "@worldcoin/id";
import dynamic from "next/dynamic";
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import router from "next/router";
import buddy from "../../public/buddy.jpg";
import graph from "../../public/graph.jpg";
import pinkies from "../../public/pinkies.jpg";
import accept from "../../public/accept.png";

const WorldIDWidget = dynamic<WidgetProps>(
  () => import("@worldcoin/id").then((mod) => mod.WorldIDWidget),
  { ssr: false }
);

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Profile() {
  const [isVerified, setIsVerified] = useState(true);

  const widgetProps: WidgetProps = {
    actionId: "wid_staging_4b91298a84334c142fe670ec98c7c5d6",
    signal: "user-id-1",
    enableTelemetry: true,
    appName: "onTrack",
    signalDescription: "Confirm your identity",
    theme: "dark",
    debug: true,
    onSuccess: (result) => console.log(result),
    onError: ({ code, detail }) => console.log({ code, detail }),
    onInitSuccess: () => console.log("Init successful"),
    onInitError: (error) =>
      console.log("Error while initialization World ID", error),
  };

  return (
    <>
      {isVerified ? (
        <div>
          <Box as={Container} maxW="7xl" mt={14} p={4}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
              }}
              gap={4}
            >
              <GridItem colSpan={1}>
                <VStack alignItems="flex-start" spacing="20px">
                  <chakra.h2 fontSize="3xl" fontWeight="700">
                    Welcome, Kartik!
                  </chakra.h2>
                  <p>Keep it up! You're Beyonce, always.</p>
                  <Button
                    backgroundColor="#B0CCC0"
                    size="md"
                    onClick={() => router.push("Form")}
                  >
                    Make a new contract +
                  </Button>
                </VStack>
              </GridItem>
              <GridItem>
                <Flex
                  style={{
                    backgroundColor: "white",
                    borderRadius: "1rem",
                    padding: "20px",
                  }}
                >
                  <chakra.p>
                    <h1
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Current Contracts
                    </h1>
                    <p style={{ paddingTop: "1rem" }}>
                      Run 5x a week <br /> for 2 months
                    </p>
                  </chakra.p>
                  <img
                    style={{
                      height: "8em",
                      borderRadius: "100%",
                    }}
                    src={graph.src}
                  />
                </Flex>
              </GridItem>
            </Grid>
            <Divider mt={12} mb={12} />
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "700",
              }}
            >
              Completed Badges
            </h1>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
              }}
              //gap={{ base: "8", sm: "12", md: "16" }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  style={{
                    height: "8em",
                    borderRadius: "100%",
                  }}
                  src={buddy.src}
                />
                <img
                  style={{
                    height: "8em",
                    borderRadius: "100%",
                  }}
                  src={pinkies.src}
                />
              </div>
              <img
                src={accept.src}
                style={{
                  position: "absolute",
                  right: "0px",
                  bottom: "0px",
                  width: "500px",
                  marginRight: "-105px",
                }}
              />
            </Grid>
          </Box>
        </div>
      ) : (
        <div style={{ margin: "auto", paddingTop: "4rem" }}>
          <p>Verify your account to access!</p>
          <WorldIDWidget {...widgetProps} />
        </div>
      )}
    </>
  );
}
