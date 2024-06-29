import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Button, Link } from "@chakra-ui/react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
          Countries of the World
        </Heading>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" color="white" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/favorites" color="white" mx={2}>
            Favorites
          </Link>
          {user ? (
            <>
              <Box color="white" mx={2}>
                Welcome, {user.username}
              </Box>
              <Button
                // colorScheme="teal"
                variant="outline"
                size="sm"
                onClick={logout}
                ml={2}
                color={"white"}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link as={RouterLink} to="/login" color="white" mx={2}>
              Login
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
