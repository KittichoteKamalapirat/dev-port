import { Button } from "@chakra-ui/button";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/layout";
import React from "react";

interface FirstLookProps {}

export const FirstLook: React.FC<FirstLookProps> = ({}) => {
  return (
    <Box height={["80vh", "85vh"]}>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100%"
        position="relative"
      >
        <Flex flexDirection="column" alignItems="center">
          <Heading fontSize="4xl">Hola, I'm Shane.</Heading>
          <Heading fontSize="3xl" color="pink.500" mt={4}>
            Full Stack Developer with Frontend Focus
          </Heading>

          <Flex flexDirection={["column", "row"]} mt={10} alignItems="center">
            <LinkBox>
              <Button
                mr={[0, 5]}
                mb={[5, 0, 0]}
                colorScheme="teal"
                rightIcon={<ExternalLinkIcon />}
                variant="outline"
              >
                View Resume
              </Button>
              <LinkOverlay
                href="https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/Kittichote_Kamalapirat_CV.pdf"
                target="_blank"
              ></LinkOverlay>
            </LinkBox>

            <LinkBox>
              <Button colorScheme="teal">See projects</Button>
              <LinkOverlay href="#projectSection"></LinkOverlay>
            </LinkBox>
          </Flex>

          <Center position="absolute" bottom={["0", "2rem"]}>
            <LinkBox>
              <Box textAlign="center">
                <Text>Learn more</Text>
                <ChevronDownIcon fontSize={["1rem", "2rem"]} />
              </Box>
              <LinkOverlay href="#projectSection"></LinkOverlay>
            </LinkBox>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};
