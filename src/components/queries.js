import gql from "graphql-tag";

const QUERY = {};

QUERY.RANDOM_LINK = gql`
  query {
    randomLink {
      id
      takeaways
      title
      url
      datesAccessed
      keywords
    }
  }
`;

export default QUERY;
