import { Button, Center, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import GoldenTicket from "../../attachments/Golden-ticket.svg";

const HomePage = () => {
  return (
    <Center
      minH="55vh"
      color="white"
      display={["block", "block", "flex", "flex", "flex"]}
    >
      <Center
        gap={5}
        // bg="red"
        // w={["100%", "90%", "80%", "70%", "60%"]}
        flexDir="column"
        p={3}
      >
        <Heading
          textAlign="center"
          fontWeight="normal"
          fontSize={["1.75rem", "2rem", "2.25rem", "2.75rem", "3rem", "4rem"]}
        >
          Solotto – the first lottery system in crypto.
        </Heading>
        <Text
          m="0 auto"
          fontWeight="light"
          color="gray.400"
          // fontSize="1.5rem"
          fontSize={["1rem", "1rem", "1.25rem", "1.25rem", "1.5rem", "2rem"]}
          textAlign="center"
        >
          We're bringing traditional lottery systems to crypto and adding a
          twist by increasing the reward pools every jackpot!
        </Text>
        <Button mt={5} colorScheme="orange" fontSize="2rem" p="2rem">
          Mint now
        </Button>
      </Center>
      <Center
      // w="40%"
      // bg="blue"
      // width={["100%", "100%", "40%", "40%", "40%"]}
      >
        <Image src={GoldenTicket.src} w="700px" />
      </Center>
    </Center>
  );
};
export default HomePage;
