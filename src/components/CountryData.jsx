import styled from "styled-components";
import PropTypes from "prop-types";

export default function CountryData({ countryData }) {
    const {name, capital, native, emoji, currency} = countryData.country
  return (
    <div>
      <PageCountryTitle>{name}</PageCountryTitle>
      <p>Capital city: {capital}</p>
      <p>Native language: {native}</p>
      <p>Emoji: {emoji}</p>
      <p>Currency: {currency}</p>

      <h2>Languages:</h2>
      <ul>
        {countryData.country.languages.map((language) => (
          <li key={language.code}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
}

const PageCountryTitle = styled.h1``;

CountryData.propTypes = {
    countryData: PropTypes.shape({
      country: PropTypes.shape({
        name: PropTypes.string,
        capital: PropTypes.string,
        native: PropTypes.string,
        emoji: PropTypes.string,
        currency: PropTypes.string,
        languages: PropTypes.arrayOf(
          PropTypes.shape({
            code: PropTypes.string,
            name: PropTypes.string,
          })
        ),
      }),
    }),
  };