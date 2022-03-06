import React from "react";
import { Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Box, Container, Text, Link } from "@chakra-ui/react";
import RightBox from "../right-box";
import LeftBox from "../left-box";

const MobileRoadMapComponent = () => {
  const theme = useTheme();

  return (
    <Flex
      gap="20px"
      flexDirection="column"
      display={["flex", "flex", "none"]}
      mt={"40px"}
    >
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Heading> 1. Launch day</Heading>
        <Text>
          All 333 Solotto tickets will be available for mint on{" "}
          <Link color="blue.400">this website</Link>. A maximum of 5 NFTs will
          be allowed for each wallet.
        </Text>
      </Box>
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Heading> 2. Jackpot day</Heading>
        <Text>
          2 winners will be randomly chosen from each type of ticket (gold,
          silver and bronze) making 6 winners in total.
        </Text>
      </Box>
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Flex flexDir="column">
          <Heading>3. Repeat second Jackpot with bigger rewards</Heading>
          <Text ml="auto" color="green.500">
            Q1 2022
          </Text>
        </Flex>
        <Text>
          The second jackpot's rewards increases by 17.3% which is taken from
          the previous pot. For e.g. the first jackpot's pool will be 99.9 SOL
          where 32% of the pool is allocated to golden ticket winners (16 SOL
          each winner). The second jackpot's pool will be 117.18 SOL, where 32%
          of the pool is allocated to golden ticket winners (18.74 SOL each
          winner).
        </Text>
      </Box>

      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Flex flexDir="column">
          <Heading>4. Increase ticket prices and repeat </Heading>
          <Text ml="auto" color="green.500">
            Q2 2022
          </Text>
        </Flex>
        <Text>
          If 17.3% of every jackpot is allocated to the next pool, then the
          jackpots will eventually stop growing (or grow by a negligible
          amount). In order to counter that, the prices of all tickets will
          increase by 0.1 SOL every{" "}
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              textUnderlineOffset: "2px",
            }}
          >
            SECOND
          </span>{" "}
          jackpot.
        </Text>
      </Box>
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Flex flexDir="column">
          <Heading>
            5. Possibly investments in fractional shares of casinos in metaverse
          </Heading>
          <Text ml="auto" color="green.500">
            Q2 2022
          </Text>
        </Flex>
        <Text>
          Once the Solotto gambling community has grown, holders of Solotto
          tickets (no matter when they were bought) will vote on ticket rewards
          and allocation of each pool that will go towards investing in casinos
          in the metaverse.
        </Text>
      </Box>
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Flex flexDir="column">
          <Heading>6. Jackpots with new allocations</Heading>
          <Text ml="auto" color="green.500">
            Q2 2022
          </Text>
        </Flex>
        <Text>
          The Solotto system will then continue to have bi-weekly jackpots with
          a voted on % being allocated towards investing in the metaverse.
          People who buy into the new Jackpots will have their shares
          accordingly, for e.g. buying a single golden ticket will contribute to
          0.4% of the total pool, therefore the buyer will own 0.4% of the
          metaverse land bought with THAT jackpot, and so on and so forth.
        </Text>
      </Box>
    </Flex>
  );
};

export default MobileRoadMapComponent;
