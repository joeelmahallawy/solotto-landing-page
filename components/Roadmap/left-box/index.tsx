import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Box, Container, Text } from "@chakra-ui/react";
import theme from "../../../themes";

interface Props {
  children: JSX.Element;
  icon?: JSX.Element;
}
const LeftBox = ({ children, icon }: Props) => {
  return (
    <Flex
      alignItems="center"
      mb={["50px", "100px", "200px", "200px", "200px"]}
      mr={["0", "0", "0", "0", "-50px"]}
    >
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="2rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
        width={["auto", "auto", "300px", "400px", "500px"]}
      >
        {children}
      </Box>
      <Box
        height="10px"
        width={["5px", "5px", "40px", "60px", "90px"]}
        bg={theme.palette.error.main}
      />
      <Center
        height={["80px", "80px", "80px", "80px"]}
        width={["80px", "80px", "80px", "80px"]}
        bg="rgba(0,0,0,0.90)"
        borderRadius="100%"
        border={`10px solid ${theme.palette.error.main}`}
        zIndex="2"
        flexShrink={0}
        display={["none", "none", "none", "none", "block"]}
        color="green"
      >
        {icon}
        {/* CHECK MARK WHEN DONE */}
      </Center>
    </Flex>
  );
};

export default LeftBox;
