import {
  Center,
  Button,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import themes from "../../themes";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <Center
      borderBottom={`1px solid ${themes.colors.divider}`}
      justifyContent="space-between"
      color="white"
      p="2%"
      id="navbar"
    >
      <Heading>(Logo)</Heading>
      <Menu>
        <MenuButton
          _hover={{ bg: "gray.600" }}
          _active={{ bg: "gray.600" }}
          _focus={{}}
          display={["flex", "flex", "none", "none", "none"]}
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          variant="outline"
        />
        <MenuList color="black">
          <MenuItem>Home</MenuItem>
          <MenuItem>Types of tickets</MenuItem>
          <MenuItem>Why we're different</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Discord</MenuItem>
          <MenuItem>Twitter</MenuItem>
        </MenuList>
      </Menu>
      <Center
        gap={[null, null, "0rem", "1.5rem", "3.5rem", "4.5rem"]}
        display={["none", "none", "flex", "flex", "flex"]}
      >
        <Center
          p="1rem"
          borderRadius={5}
          fontSize={["14px", "14px", "20px", "28px", "32px", "40px"]}
          fontFamily="Anton"
          color="white"
        >
          <Center
            _hover={{ color: "gray.400", cursor: "pointer" }}
            borderRight="1px solid white"
            h="40px"
            p="1rem"
          >
            <Link
              activeClass="active"
              //   to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </Center>
          <Center
            _hover={{ color: "gray.400", cursor: "pointer" }}
            borderRight="1px solid white"
            h="40px"
            p="1rem"
          >
            <Link
              activeClass="active"
              //   to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Ticket types
            </Link>
          </Center>
          <Center
            _hover={{ color: "gray.400", cursor: "pointer" }}
            h="40px"
            p="1rem"
            borderRight="1px solid white"
          >
            <Link
              activeClass="active"
              //   to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Why we're different
            </Link>
          </Center>
          <Center
            _hover={{ color: "gray.400", cursor: "pointer" }}
            h="40px"
            p="1rem"
          >
            <Link
              activeClass="active"
              //   to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Roadmap
            </Link>
          </Center>
        </Center>
        <Center
          ml="auto"
          display={["none", "none", "flex", "flex", "flex"]}
          // color="gray.300"
          fontSize="2.5rem"
          gap="1rem"
        >
          <ChakraLink
            color="#7289DA"
            _hover={{ color: "#5972CB" }}
            isExternal
            href="https://discord.gg/jU5Bs3URHY"
          >
            <FaDiscord />
          </ChakraLink>

          <ChakraLink
            _hover={{ color: "#188DD5" }}
            color="#1DA1F2"
            href="https://twitter.com/nftsolottery"
            isExternal
          >
            <BsTwitter />
          </ChakraLink>
        </Center>
      </Center>
    </Center>
  );
};
export default Header;
