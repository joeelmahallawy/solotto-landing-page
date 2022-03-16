import {
  Box,
  Button,
  Center,
  Container,
  Text,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import themes from "../../themes";
import LeftBox from "./left-box";
import MobileRoadMapComponent from "./mobile";
import RightBox from "./right-box";
import styles from "./styles";

const RoadmapSection = () => {
  return (
    <Center
      id="roadmap"
      borderTop={`1px solid ${themes.colors.divider}`}
      color="white"
      p="1%"
      flexDir="column"
      // gap="1rem"
    >
      <Heading
        fontWeight="extrabold"
        fontSize={["0.75rem", "1rem", "1.25rem", "1.25rem", "2.5rem", "3rem"]}
        textDecor="underline"
        mt="1%"
        textUnderlineOffset="8px"
      >
        Roadmap
      </Heading>

      <Center maxW="container.xl">
        <Flex flexDirection="column">
          <Flex display={["none", "none", "flex"]}>
            <Box mt="5rem">
              {/* icon={<GiCheckMark fontSize="4rem" />} */}
              {/* PUT WHEN CHECKED AND COMPLETED TASK */}
              <LeftBox>
                <>
                  <Flex flexDir="column">
                    <Heading fontSize="1.75rem" mr="auto">
                      1. Public Mint
                    </Heading>
                    <Text ml="auto" color="green.300">
                      March 14th, 2022
                    </Text>
                  </Flex>

                  <Text fontWeight="light">
                    All 333 Solotto tickets will be available for mint on{" "}
                    <Link color="blue.400">this website</Link>. A maximum of 5
                    NFTs will be allowed for each wallet.
                  </Text>
                </>
              </LeftBox>

              <LeftBox>
                <>
                  <Center flexDir="column">
                    <Heading fontSize="1.75rem" mr="auto">
                      3. Repeat second Jackpot with bigger rewards
                    </Heading>
                    <Text ml="auto" color="green.300">
                      April 15th, 2022
                    </Text>
                  </Center>
                  <Text fontWeight="light">
                    The second jackpot's rewards increases by 17.3% which is
                    taken from the previous pot. For e.g. the first jackpot's
                    pool will be 99.9 SOL where 32% of the pool is allocated to
                    golden ticket winners (16 SOL each winner). The second
                    jackpot's pool will be 117.18 SOL, where 32% of the pool is
                    allocated to golden ticket winners (18.74 SOL each winner).
                  </Text>
                </>
              </LeftBox>
              <LeftBox>
                <>
                  <Flex flexDir="column">
                    <Heading fontSize="1.75rem">
                      {" "}
                      5. Allocation of pool is dedicated to casinos in the
                      metaverse
                    </Heading>
                    <Text ml="auto" color="green.500">
                      Q2 2022
                    </Text>
                  </Flex>
                  <Text fontWeight="light">
                    By the fifth Jackpot, all holders of Solotto tickets (no
                    matter when they were bought) will vote on sixth pool's
                    allocation of funds that will be put towards investing in
                    casinos in the metaverse.
                  </Text>
                </>
              </LeftBox>
              <LeftBox>
                <>
                  <Flex flexDir="column">
                    <Heading fontSize="1.75rem">
                      {" "}
                      7. $GMBL token distribution
                    </Heading>
                    <Text ml="auto" color="green.500">
                      Q2 2022
                    </Text>
                  </Flex>
                  <Text fontWeight="light">
                    Holders of metaverse casino will be paid out in $GMBL. To
                    get $GMBL, users can either buy Solotto tickets and enter
                    the jackpots (while also getting fractional shares of the
                    casino) OR can buy $GMBL off the secondary market.
                  </Text>
                </>
              </LeftBox>
              <LeftBox>
                <>
                  <Flex flexDir="column">
                    <Heading fontSize="1.75rem">
                      {" "}
                      9. Continue Jackpots and metaverse investing
                    </Heading>
                    <Text ml="auto" color="green.500">
                      Q2 2022
                    </Text>
                  </Flex>
                  <Text fontWeight="light">
                    We will continue hosting the bi-weekly jackpot draws and put
                    more and more towards investing into metaverse casinos and
                    giving holders fractional shares of the revenue.
                  </Text>
                </>
              </LeftBox>
            </Box>

            <Flex flexBasis="20px">
              <Box {...styles.verticalLine} />
            </Flex>

            <Center flexDir="column" mt="5%">
              <RightBox>
                <>
                  <Center flexDir="column">
                    <Heading fontSize="1.75rem" mr="auto">
                      2. Jackpot day
                    </Heading>
                    <Text ml="auto" color="green.300">
                      April 1st, 2022
                    </Text>
                  </Center>
                  <Text fontWeight="light">
                    2 winners will be randomly chosen from each type of ticket
                    (gold, silver and bronze) making 6 winners in total.
                  </Text>
                </>
              </RightBox>
              <Box mt="3rem">
                <RightBox>
                  <>
                    <Flex flexDir="column">
                      <Heading fontSize="1.75rem">
                        4. Increase ticket prices and repeat
                      </Heading>
                      <Text ml="auto" color="green.500">
                        Q2 2022
                      </Text>
                    </Flex>
                    <Text fontWeight="light">
                      If 17.3% of every jackpot is allocated to the next pool,
                      then the jackpots will eventually stop growing (or grow by
                      a negligible amount). In order to counter that, the prices
                      of all tickets will increase by 0.1 SOL every{" "}
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
                  </>
                </RightBox>
              </Box>
              <RightBox>
                <>
                  <Flex flexDir="column">
                    <Heading fontSize="1.75rem">
                      6. Jackpots with new allocations towards metaverse casino
                    </Heading>
                    <Text ml="auto" color="green.500">
                      Q2 2022
                    </Text>
                  </Flex>
                  <Text fontWeight="light">
                    Starting from the sixth pool, people who buy into Solotto
                    tickets will also recieve fractional shares of the metaverse
                    casino that is bought with the funding from THAT pool. All
                    revenue made from the metaverse plot will then be paid out
                    to holders in $GMBL. For e.g. if you buy 3 golden tickets in
                    the sixth pool, you will own ~1.2% (~0.4% each) of the plot
                    bought with the sixth pool's allocation and receive ~1.2% of
                    the revenue made from the casino in $GMBL.
                  </Text>
                </>
              </RightBox>

              <RightBox>
                <>
                  <Flex flexDir="column">
                    <Heading fontSize="1.75rem">
                      {" "}
                      8. $GMBL token integrated within website
                    </Heading>
                    <Text ml="auto" color="green.500">
                      Q2 2022
                    </Text>
                  </Flex>
                  <Text fontWeight="light">
                    $GMBL will be used as a gateway token for all games on our
                    website. Users can play all types of gambling and betting
                    games with $GMBL.
                  </Text>
                </>
              </RightBox>
            </Center>
          </Flex>

          <MobileRoadMapComponent />
        </Flex>
      </Center>
    </Center>
  );
};
export default RoadmapSection;
