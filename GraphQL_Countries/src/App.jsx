import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import AutocompleteText from "./components/AutocompleteText";
import { GET_COUNTRY_CODES, GET_COUNTRY_DATA } from "./queries";
import styled from "styled-components";

export default function App() {
  const [country, setCountry] = useState("US");

  const {
    data: countryData,
    loading: countryDataLoading,
    error: countryDataError,
  } = useQuery(GET_COUNTRY_DATA, {
    variables: { countryCode: country },
  });
  const { data: countryCode, loading: countryCodeLoading, error: countryCodeError } = useQuery(GET_COUNTRY_CODES);
  const countryCodesData = countryCode?.countries;
  const countriesWithLabels = countryCodesData?.map((n) => {
    return { label: n.name, code: n.code };
  });
  if (countryDataLoading) return "Loading...";
  if (countryCodeLoading) return "Loading country data...";
  if (countryDataError) return <pre>{countryDataError.message}</pre>;
  if (countryCodeError) return <pre>{countryCodeError.message}</pre>;

  if (!countryData || !countryData.country) {
    return <p>No data available</p>;
  }

  return (
    <PageWrap>
      <LS>
        <SubTitle>Select a country:</SubTitle>
        <AutocompleteText options={countriesWithLabels} setCountry={setCountry} val={countryData.country.name} />
      </LS>
      <RS>
        <PageCountryTitle>{countryData.country.name}</PageCountryTitle>
        <p>Capital city: {countryData.country.capital}</p>
        <p>Native language: {countryData.country.native}</p>
        <p>Emoji: {countryData.country.emoji}</p>
        <p>Currency: {countryData.country.currency}</p>

        <h2>Languages:</h2>
        <ul>
          {countryData.country.languages.map((language) => (
            <li key={language.code}>{language.name}</li>
          ))}
        </ul>
      </RS>
    </PageWrap>
  );
}

const PageWrap = styled.main`
  display: flex;
  width: 100%;
  padding: 80px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const PageCountryTitle = styled.h1``;

const SubTitle = styled.h2``;

const LS = styled.div`
  width: 50vw;
`;

const RS = styled.div`
  margin-right: 80px;
  width: 50vw;
`;
