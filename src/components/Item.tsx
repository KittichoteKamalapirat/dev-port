import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Box, Text, Center, Link } from "@chakra-ui/layout";
import { Flex, Img, Tag } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useMotionTemplate } from "framer-motion";

import React from "react";
import { personalProjects, PersonalProjectType, ProExpType } from "./constants";

interface ItemProps {
  items: PersonalProjectType[] | ProExpType[];
}

export const Item: React.FC<ItemProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Flex
          key={index}
          flexDirection={["column", "row"]}
          mb={20}
          boxShadow="md"
        >
          <Center flex={1} bgColor={item.bgColor} py={[8, 12]}>
            <Img src={item.imgUrl} width={item.imgWidth || "40%"} />
          </Center>
          <Box flex={1} p={8} position="relative">
            <Heading fontSize="xl">
              {" "}
              {item.projectDes} |{" "}
              <Text d="inline" color={item.bgColor}>
                {item.projectName}
              </Text>
            </Heading>
            <Text>{item.body}</Text>
            <Box my={4}>
              <Text fontWeight="bold">Technologies:</Text>
              {item.technologies.map((tech, index, arr) => (
                <Tag size="md" mt={1} mr={2} colorScheme="blue" key={index}>
                  {tech}
                </Tag>
              ))}
            </Box>
            {item.status && (
              <>
                <Text fontWeight="bold" d="inline">
                  Status:
                </Text>
                <Tag
                  size="md"
                  mx={1}
                  colorScheme={item.status === "Active" ? "teal" : "gray"}
                >
                  {item.status}
                </Tag>
              </>
            )}
            {item.employmentType && (
              <>
                Employment Type:{" "}
                <Tag size="md" mx={1} colorScheme="blackAlpha">
                  {" "}
                  {item.employmentType}
                </Tag>
              </>
            )}
            <Box position="absolute" bottom="1rem" right="1rem">
              <Link href={item.externalLink} target="_blank">
                <ExternalLinkIcon fontSize="1.2rem" color="gray.400" />
              </Link>
            </Box>
          </Box>
        </Flex>
      ))}
    </>
  );
};
