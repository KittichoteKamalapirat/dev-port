import { Box } from "@chakra-ui/layout";
import React from "react";

interface XContainerProps {}

export const XContainer: React.FC<XContainerProps> = ({ children }) => {
  return (
    <Box maxWidth={["95%", "80%", "70%", "60%"]} m="auto">
      {children}
    </Box>
  );
};
