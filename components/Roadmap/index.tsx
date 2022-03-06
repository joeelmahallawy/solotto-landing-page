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
      borderTop={`1px solid ${themes.colors.divider}`}
      color="white"
      p="1%"
      flexDir="column"
      // gap="1rem"
    >
      <Heading
        fontWeight="extrabold"
        fontSize={["0.75rem", "1rem", "1.25rem", "1.25rem", "1.5rem", "3rem"]}
        textDecor="underline"
        mt="1%"
        textUnderlineOffset="8px"
      >
        Roadmap
      </Heading>

      <Container maxW="container.xl">
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
                      5. Possibly investments in fractional shares of casinos in
                      metaverse
                    </Heading>
                    <Text ml="auto" color="green.500">
                      Q2 2022
                    </Text>
                  </Flex>
                  <Text fontWeight="light">
                    Once the Solotto gambling community has grown, holders of
                    Solotto tickets (no matter when they were bought) will vote
                    on ticket rewards and allocation of each pool that will go
                    towards investing in casinos in the metaverse.
                  </Text>
                </>
              </LeftBox>
            </Box>

            <Flex flexBasis="20px">
              <Box {...styles.verticalLine} />
            </Flex>

            <Center flexDir="column" mt="25%">
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
                      6. Jackpots with new allocations
                    </Heading>
                    <Text ml="auto" color="green.500">
                      Q2 2022
                    </Text>
                  </Flex>
                  <Text fontWeight="light">
                    The Solotto system will then continue to have bi-weekly
                    jackpots with a voted on % being allocated towards investing
                    in the metaverse. People who buy into the new Jackpots will
                    have their shares accordingly, for e.g. buying a single
                    golden ticket will contribute to 0.4% of the total pool,
                    therefore the buyer will own 0.4% of the metaverse land
                    bought with THAT jackpot, and so on and so forth.
                  </Text>
                </>
              </RightBox>
            </Center>
          </Flex>

          <MobileRoadMapComponent />
        </Flex>
      </Container>
    </Center>
  );
};
export default RoadmapSection;
