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
            5. Allocation of pool is dedicated to casinos in the metaverse
          </Heading>
          <Text ml="auto" color="green.500">
            Q2 2022
          </Text>
        </Flex>
        <Text>
          By the fifth Jackpot, all holders of Solotto tickets (no matter when
          they were bought) will vote on sixth pool's allocation of funds that
          will be put towards investing in casinos in the metaverse.
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
            6. Jackpots with new allocations towards metaverse casino
          </Heading>
          <Text ml="auto" color="green.500">
            Q2 2022
          </Text>
        </Flex>
        <Text>
          Starting from the sixth pool, people who buy into Solotto tickets will
          also recieve fractional shares of the metaverse casino that is bought
          with the funding from THAT pool. All revenue made from the metaverse
          plot will then be paid out to holders in $GMBL. For e.g. if you buy 3
          golden tickets in the sixth pool, you will own ~1.2% (~0.4% each) of
          the plot bought with the sixth pool's allocation and receive ~1.2% of
          the revenue made from the casino in $GMBL.
        </Text>
      </Box>
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Flex flexDir="column">
          <Heading>7. $GMBL token distribution</Heading>
          <Text ml="auto" color="green.500">
            Q2 2022
          </Text>
        </Flex>
        <Text>
          Holders of metaverse casino will be paid out in $GMBL. To get $GMBL,
          users can either buy Solotto tickets and enter the jackpots (while
          also getting fractional shares of the casino) OR can buy $GMBL off the
          secondary market.
        </Text>
      </Box>
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Flex flexDir="column">
          <Heading>8. $GMBL token integrated within website</Heading>
          <Text ml="auto" color="green.500">
            Q2 2022
          </Text>
        </Flex>
        <Text>
          $GMBL will be used as a gateway token for all games on our website.
          Users can play all types of gambling and betting games with $GMBL.
        </Text>
      </Box>
      <Box
        bg="rgba(0,0,0,0.25)"
        padding="1.75rem"
        borderRadius="40px 0 40px 0"
        minHeight="100px"
      >
        <Flex flexDir="column">
          <Heading>9. Continue Jackpots and metaverse investing</Heading>
          <Text ml="auto" color="green.500">
            Q2 2022
          </Text>
        </Flex>
        <Text>
          We will continue hosting the bi-weekly jackpot draws and put more and
          more towards investing into metaverse casinos and giving holders
          fractional shares of the revenue.
        </Text>
      </Box>
    </Flex>
  );
};

export default MobileRoadMapComponent;
