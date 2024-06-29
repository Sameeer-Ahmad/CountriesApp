import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const CountryCard = ({ country, onFavorite, isFavorite }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={country.flag} alt={`${country.name} flag`} />
      <Box p="6">
        <Box d="flex" >
          <Heading as="h3" fontSize="xl" mb="2">
            {country.name}
          </Heading>
        </Box>
        <Text>
          <strong>Capital:</strong> {country.capital}
        </Text>
        <Text>
          <strong>Languages:</strong> {country.languages}
        </Text>
        <Button
          mt={4}
          colorScheme={isFavorite ? "red" : "green"}
          onClick={() => onFavorite(country)}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </Button>
      </Box>
    </Box>
  );
};

export default CountryCard;
