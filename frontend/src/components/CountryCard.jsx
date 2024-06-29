const CountryCard = ({ country, onFavorite, isFavorite }) => {
  return (
    <div className="country-card">
      <img src={country.flag} alt={`${country.name} flag`} />
      <h3>{country.name}</h3>
      <p>Capital: {country.capital}</p>
      <p>Languages: {country.languages}</p>
      <button onClick={() => onFavorite(country)}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default CountryCard;
