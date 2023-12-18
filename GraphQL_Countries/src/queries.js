import { gql } from 'graphql';

export const GET_DATA = gql`
query Query {
  country(code: "BR") {
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

