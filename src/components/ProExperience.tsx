import { Heading, Box, Flex, Image, Text, Img, Center } from "@chakra-ui/react";
import React from "react";
import { personalProjects, proExperience } from "./constants";
import { Item } from "./Item";

interface ProExperienceProps {}

export const ProExperience: React.FC<ProExperienceProps> = ({}) => {
  return (
    <Box my={5} py={5}>
      <Center>
        <Heading fontSize="3xl" mb={10}>
          Professional Experience
        </Heading>
      </Center>

      <Box>
        <Item items={proExperience} />
      </Box>
    </Box>
  );
};
