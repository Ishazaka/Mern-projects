import React from "react";
import { Flex, Container, Text, Button, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
const {colorMode , toggleColorMode} = useColorMode()

  return (
    <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100" , "gray.900")}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          //   color="gray.800"
        >
          <Link to="/">IB Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FiPlusSquare  fontSize={20}/>
            </Button>
          
          </Link>
          <Button onClick={toggleColorMode} >
            {colorMode === "light" ?  <IoMoon/> : <LuSun/> }
          
            </Button>

        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
