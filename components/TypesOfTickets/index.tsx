import { Center, Heading, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import themes from "../../themes";
import BronzeTicket from "../../attachments/Bronze-ticket.svg";
import SilverTicket from "../../attachments/Silver-ticket.svg";
import GoldenTicket from "../../attachments/Golden-ticket.svg";

const TicketSection = () => {
  return (
    <Center
      borderTop={`1px solid ${themes.colors.divider}`}
      color="white"
      p="1%"
      flexDir="column"
    >
      <Heading
        fontWeight="extrabold"
        fontSize={["24px", "28px", "40px", "44px", "48px", "54px"]}
        textDecor="underline"
        mt="1%"
        // color="red"
        textUnderlineOffset="8px"
      >
        Types of tickets
      </Heading>
      <Center
        display={["block", "block", "block", "flex", "flex"]}
        id="golden-ticket"
        w="100%"
        mt="3%"
      >
        <Center w={["100%", "100%", "100%", "45%", "45%"]} flexDir="column">
          <Heading
            textAlign="center"
            fontWeight="light"
            fontSize={["1.5rem", "1.5rem", "2rem", "2rem", "2.5rem", "3rem"]}
          >
            There will be a total of 111 golden tickets that will be minted at
            0.4 SOL each and the winners will receive 16 SOL
          </Heading>
        </Center>
        <Center w={["auto", "auto", "auto", "50vw", "40vw"]}>
          <Image src={GoldenTicket.src} w="100%" h="100%" />
        </Center>
      </Center>
      <Center
        display={["flex", "flex", "flex", "flex", "flex"]}
        id="silver-ticket"
        mt="3%"
        flexDir={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
          "row",
        ]}
        justifyContent="flex-start"
      >
        <Center w={["100%", "100%", "100%", "50vw", "40vw"]}>
          <Image src={SilverTicket.src} w="100%" h="100%" />
        </Center>
        <Center
          w={["100%", "100%", "100%", "45%", "45%"]}
          gap={5}
          flexDir="column"
          p={3}
        >
          <Heading
            textAlign="center"
            fontWeight="light"
            fontSize={["1.5rem", "1.5rem", "2rem", "2rem", "2.5rem", "3rem"]}
          >
            There will be a total of 111 silver tickets that will be minted at
            0.3 SOL each and the winners will receive 11 SOL
          </Heading>
        </Center>
      </Center>

      <Center
        display={["block", "block", "block", "flex", "flex"]}
        id="bronze-ticket"
        w="100%"
        mt="3%"
      >
        <Center w={["100%", "100%", "100%", "45%", "45%"]} flexDir="column">
          <Heading
            textAlign="center"
            fontWeight="light"
            fontSize={["1.5rem", "1.5rem", "2rem", "2rem", "2.5rem", "3rem"]}
          >
            There will be a total of 111 bronze tickets that will be minted at
            0.2 SOL each and the winners will receive 6.6 SOL
          </Heading>
        </Center>
        <Center w={["auto", "auto", "auto", "50vw", "40vw"]}>
          <Image src={BronzeTicket.src} w="100%" h="100%" />
        </Center>
      </Center>
    </Center>
  );
};
export default TicketSection;
