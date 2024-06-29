import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import CountryCard from "../components/CountryCard";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/favorites", {
          headers: { "x-auth-token": token },
        });
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };
    if (user) {
      fetchFavorites();
    }
  }, [user]);

  return (
    <Box bg={"gray.200"} maxW="xl" mx="auto" mt={10} p={6}>
      <Heading as="h2" size="lg" mb={6}>
        Favorites
      </Heading>
      {favorites.length > 0 ? (
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {favorites.map((fav) => (
            <CountryCard key={fav.countryCode} country={fav} />
          ))}
        </Grid>
      ) : (
        <Text>No favorites added yet.</Text>
      )}
    </Box>
  );
};

export default Favorites;
