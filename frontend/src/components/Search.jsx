import React, { useState, useRef, useEffect } from "react";
import { Box, FormControl, Input, Button } from "@chakra-ui/react";

const Search = ({ onSearch }) => {
  const [currencyCode, setCurrencyCode] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(currencyCode);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} bg="gray.50" borderRadius="md" shadow="md">
      <FormControl>
        <Input
          type="text"
          value={currencyCode}
          onChange={(e) => setCurrencyCode(e.target.value)}
          placeholder="Enter currency code"
          ref={inputRef}
          mb={4}
          bg="white"
          borderColor="gray.300"
          _hover={{ borderColor: "gray.400" }}
          _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
        />
        <Button type="submit" colorScheme="teal" size="md" w="full">
          Search
        </Button>
      </FormControl>
    </Box>
  );
};

export default Search;
