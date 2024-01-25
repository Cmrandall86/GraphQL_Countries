import { useState } from "react";
import { useQuery } from "@apollo/client";
import AutocompleteText from "./components/CountrySelect";
import { GET_COUNTRY_CODES, GET_COUNTRY_DATA } from "./queries";
import styled from "styled-components";
import LoadingComponent from "./components/LoadingComponent";
import ErrorComponent from "./components/ErrorComponent";
import CountryData from "./components/CountryData";

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

  if (countryCodeLoading) return <LoadingComponent />;
  if (countryDataError) return <ErrorComponent errorMessage={countryDataError.message} />;
  if (countryCodeError) return <ErrorComponent errorMessage={countryCodeError.message} />;

  if (!countryData || !countryData.country) {
    return <LoadingComponent />;
  }

  return (
    <PageWrap>
      <LS>
        <SubTitle>Select a country:</SubTitle>
        <AutocompleteText options={countriesWithLabels} setCountry={setCountry} val={countryData.country.name} />
      </LS>
      <RS>{countryDataLoading ? <LoadingComponent /> : <CountryData countryData={countryData} />}</RS>
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

const SubTitle = styled.h2``;

const LS = styled.div`
  width: 50vw;
`;

const RS = styled.div`
  margin-right: 80px;
  width: 50vw;
`;
