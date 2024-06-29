import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Search from "../components/Search";
import CountryDetails from "../components/CountryDetails";
import {
  Box,
  Text,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [history, setHistory] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/history", {
          headers: { "x-auth-token": token },
        });
        setHistory(response.data);
      } catch (error) {
        console.error("Error fetching history", error);
      }
    };
    if (user) {
      fetchHistory();
    }
  }, [user]);

  const handleSearch = async (currencyCode) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/api/countries/${currencyCode}`,
        {
          headers: { "x-auth-token": token },
        }
      );
      setCountries(response.data);

      await axios.post(
        "http://localhost:5000/api/history",
        { search: currencyCode },
        { headers: { "x-auth-token": token } }
      );
      setHistory((prevHistory) =>
        [
          currencyCode,
          ...prevHistory.filter((search) => search !== currencyCode),
        ].slice(0, 5)
      );
    } catch (error) {
      console.error("Error searching for countries", error);
    }
  };

  const handleFavorite = async (country) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://countriesapp-e6oj.onrender.com/api/favorites",
        country,
        {
          headers: { "x-auth-token": token },
        }
      );
      console.log("Favorite added", response.data);
    } catch (error) {
      console.error("Error adding favorite", error);
    }
  };

  return (
    <Box maxW="xl" mx="auto" mt={10} p={6}>
      <Search onSearch={handleSearch} />
      {history.length > 0 && (
        <Box mt={6}>
          <Heading as="h2" size="md" mb={2}>
            Search History
          </Heading>
          <List>
            {history.map((search, index) => (
              <ListItem key={index}>{search}</ListItem>
            ))}
          </List>
        </Box>
      )}
      {countries.length > 0 ? (
        <CountryDetails
          countries={countries}
          onFavorite={handleFavorite}
          favorites={history}
        />
      ) : (
        <Text mt={6}>
          {user ? (
            <div>
              Login First <ChakraLink as={Link} to={"/login"} color="teal.500">Login</ChakraLink>
            </div>
          ) : (
            `No countries to display. Start searching by currency code!`
          )}
        </Text>
      )}
    </Box>
  );
};

export default Home;
