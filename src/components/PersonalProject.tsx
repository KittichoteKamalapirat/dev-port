import { Heading, Box, Center } from "@chakra-ui/react";
import React from "react";
import { personalProjects } from "./constants";
import { Item } from "./Item";

interface PersonalProjectProps {}

export const PersonalProject: React.FC<PersonalProjectProps> = ({}) => {
  return (
    <Box my={5} py={5}>
      <Center>
        <Heading fontSize="3xl" mb={10}>
          Personal Projects
        </Heading>
      </Center>

      <Box>
        <Item items={personalProjects} />
      </Box>
    </Box>
  );
};
