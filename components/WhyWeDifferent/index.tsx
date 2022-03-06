import {
  Center,
  Heading,
  Text,
  Button,
  ListItem,
  UnorderedList,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import themes from "../../themes";
import allocationPic from "../../attachments/allocation-chart.png";

const WhyWeDifferentSection = () => {
  return (
    <Center
      borderTop={`1px solid ${themes.colors.divider}`}
      color="white"
      p="1%"
      flexDir="column"
      gap="1rem"
    >
      <Heading
        fontWeight="extrabold"
        // fontSize={["20px", "24px", "32px", "40px", "48px", "54px"]}
        fontSize={["0.75rem", "1rem", "1.25rem", "1.25rem", "1.5rem", "3rem"]}
        textDecor="underline"
        mt="1%"
        textUnderlineOffset="8px"
      >
        Why we're different
      </Heading>
      <Center
        display={["block", "block", "block", "flex", "flex"]}
        fontSize={[
          "0.75rem",
          "1rem",
          "1.25rem",
          "1.25rem",
          "1.5rem",
          "2.25rem",
        ]}
        p="3%"
      >
        <UnorderedList w="100%">
          <ListItem>Cheap ticket with chances of 40x your money</ListItem>
          <ListItem>
            In traditional lotteries, you have a one-in-a-million chance, here
            you have a 1/111 chance
          </ListItem>
          <ListItem>
            % of all minting premium goes towards making the next jackpot bigger
          </ListItem>
        </UnorderedList>
        <Box bg="blue">
          <Image src={allocationPic.src} />
        </Box>
      </Center>
    </Center>
  );
};
export default WhyWeDifferentSection;
