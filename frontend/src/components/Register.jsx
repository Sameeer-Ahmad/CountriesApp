import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, FormControl, FormLabel, Input, Button, Text, Link } from "@chakra-ui/react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(username, password);
    navigate("/login");
  };

  return (
    <Box maxW="sm" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full" mb={4}>
          Register
        </Button>
        <Text>
          Already have an account?{" "}
          <Link as={RouterLink} to="/login" color="teal.500">
            Login here
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default Register;
