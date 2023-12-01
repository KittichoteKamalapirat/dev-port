import { AddIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Heading, Box, Link, Center } from "@chakra-ui/layout";
import { Tag, TagLeftIcon, TagLabel, TagRightIcon } from "@chakra-ui/tag";
import React from "react";
import { XContainer } from "./XContainer";
// import {SvgCv,SvgLinkedin, SvgGithub } from './svgComponents'
// import {SvgCv,SvgLinkedin, SvgGithub } from './svgComponents'
import SvgGithub from "./svgComponents/Github";
import SvgCv from "./svgComponents/Cv";
import SvgLinkedin from "./svgComponents/Linkedin";
import SvgLogo from "./svgComponents/Logo";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { navItems } from "./constants";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  const color = useColorModeValue("black", "white");

  return (
    <Box top="0" width="100%" pt={[4, 4]}>
      <XContainer>
        <Box>
          <Flex justifyContent="space-between">
            <Flex alignItems={["top", "top", "center"]}>
              <SvgLogo fontSize="1.5rem" fill={color} />
              <Heading fontSize={["md", "lg", "2xl"]} ml={1}>
                Kittichote Kamalapirat
              </Heading>
            </Flex>

            <Flex
              flexDirection={["column-reverse", "column-reverse", "row"]}
              alignItems={["end", "end", "center"]}
              position={["absolute", "static"]}
              right={["1rem"]}
            >
              {navItems.map((item, index) => (
                <Link
                  href={item.externalLink}
                  target="_blank"
                  m={1}
                  key={index}
                >
                  <Tag variant="subtle" colorScheme="gray" p={[1, 2]}>
                    {/* <TagLeftIcon as={SvgGithub} /> */}
                    {item.text === "Resume" && <SvgCv fill={color} />}
                    {item.text === "Github" && <SvgGithub fill={color} />}
                    {item.text === "LinkedIn" && <SvgLinkedin fill={color} />}

                    <TagLabel
                      pl={1}
                      fontSize={["sm", "md"]}
                      display={["none", "none", "block"]}
                    >
                      {item.text}
                    </TagLabel>
                  </Tag>
                </Link>
              ))}
              <DarkModeSwitch />
            </Flex>
          </Flex>
        </Box>
      </XContainer>
    </Box>
  );
};
