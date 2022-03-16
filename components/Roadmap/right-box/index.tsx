import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Box, Container, Text } from "@chakra-ui/react";
import theme from "../../../themes";

interface Props {
  children: any;
  icon?: JSX.Element;
}

const RightBox = ({ children, icon }: Props) => {
  return (
    <Flex alignItems="center" mb="200px" ml={["0", "0", "0", "0", "-50px"]}>
      <Center
        color="green"
        height={["80px", "80px", "80px", "80px"]}
        width={["80px", "80px", "80px", "80px"]}
        bg="rgba(0,0,0,0.90)"
        borderRadius="100%"
        border={`10px solid ${theme.palette.error.main}`}
        zIndex="2"
        display={["none", "none", "none", "none", "block"]}
      >
        {icon}
      </Center>
      <Box
        height="10px"
        width={["5px", "5px", "40px", "60px", "90px"]}
        bg={theme.palette.error.main}
      />
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="2rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
        width={["auto", "auto", "400px", "500px", "600px"]}
        // width={["auto", "auto", "400px", "500px", "550px"]}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default RightBox;
