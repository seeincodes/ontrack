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
                    Welcome, Justina!
                  </chakra.h2>
                  <Button
                    colorScheme="green"
                    size="md"
                    onClick={() => router.push("Form")}
                  >
                    Make a new agreement +
                  </Button>
                </VStack>
              </GridItem>
              <GridItem>
                <Flex>
                  <chakra.p>
                    Provide your customers a story they would enjoy keeping in
                    mind the objectives of your website. Pay special attention
                    to the tone of voice.
                  </chakra.p>
                </Flex>
              </GridItem>
            </Grid>
            <Divider mt={12} mb={12} />
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              }}
              gap={{ base: "8", sm: "12", md: "16" }}
            >
              <Feature
                heading={"First Feature"}
                text={"Short text describing one of you features/service"}
              />
              <Feature
                heading={"Second Feature"}
                text={"Short text describing one of you features/service"}
              />
              <Feature
                heading={"Third Feature"}
                text={"Short text describing one of you features/service"}
              />
              <Feature
                heading={"Fourth Feature"}
                text={"Short text describing one of you features/service"}
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
