import { Heading, Box, Center, Flex } from "@chakra-ui/layout";
import React from "react";

interface TechnologyProps {}

export const Technology: React.FC<TechnologyProps> = ({}) => {
  return (
    <>
      <Center>
        <Heading fontSize="3xl" mb={10}>
          Technologies
        </Heading>
      </Center>

      <Flex>
        <Box flex={1}>
          <Heading>Frontend</Heading>
        </Box>
        <Box flex={1}>
          <Heading>Backend</Heading>
        </Box>
        <Box flex={1}></Box>
      </Flex>
    </>
  );
};
