import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
query Query {
    country(code: "US") {
    name
    native
    capital
    emoji
    currency
    languages {
        code
        name
    }
    }
}
`;

export default function App() {
  const { data, loading, error } = useQuery(GET_DATA);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  console.log(data)


  return (
    <div>
        {data.country.capital}
    </div>
  );
}