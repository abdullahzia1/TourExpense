import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Heading as="h1">Tour Expense Tracker</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
