import { Box } from "@chakra-ui/layout";
import React from "react";
import { ProExperience } from "./ProExperience";
import { Nav } from "./Nav";
import { Technology } from "./Technology";
import { XContainer } from "./XContainer";
import { PersonalProject } from "./PersonalProject";
import { FirstLook } from "./FirstLook";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Box width="100%">
      <Nav />
      <Box mt={10}>
        <XContainer>
          <FirstLook />
          <Box id="projectSection">
            <PersonalProject />
            <ProExperience />
          </Box>

          {/* <Technology /> */}
        </XContainer>
      </Box>
    </Box>
  );
};
