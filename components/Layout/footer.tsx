import { Box, Center, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import themes from "../../themes";

const Footer = () => {
  return (
    <Center
      borderTop={`1px solid ${themes.colors.divider}`}
      justifyContent="space-between"
      color="white"
      p="2%"
      id="navbar"
    >
      <Box w="33%" bg="green" />
      <Center>
        <Heading
          fontSize={["0.75rem", "1rem", "1.5rem", "2rem", "2rem", "2rem"]}
        >
          &copy; Copyright 2022
        </Heading>
      </Center>
      <Center
        w="33%"
        justifyContent="flex-end"
        gap={[6, 8, 10, 12, 14]}
        p={3}
        fontSize={["0.75rem", "0.75rem", "1.5rem", "2rem", "2rem", "2rem"]}
      >
        <Link href="google.com">Discord</Link>
        <Link href="google.com">Twitter</Link>
      </Center>
    </Center>
  );
};
export default Footer;
