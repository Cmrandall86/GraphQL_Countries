import { gql } from "@apollo/client";

export const GET_COUNTRY_DATA = gql`
  query Query($countryCode: ID!) {
    country(code: $countryCode) {
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

export const GET_COUNTRY_CODES = gql`
  query {
    countries {
      name
      code
    }
  }
`;