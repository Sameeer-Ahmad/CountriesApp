import React from "react";
import CountryCard from "./CountryCard";

const CountryDetails = ({ countries, onFavorite, favorites }) => {
  return (
    <div className="country-details">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          country={country}
          onFavorite={onFavorite}
          isFavorite={favorites.some(
            (fav) => fav.countryCode === country.countryCode
          )}
        />
      ))}
    </div>
  );
};

export default CountryDetails;
