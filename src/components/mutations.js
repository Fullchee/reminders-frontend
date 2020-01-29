import gql from "graphql-tag";

const MUTATION = {};

MUTATION.UPDATE_LINK = gql`
  mutation($stringifiedLink: String!) {
    updateLink(stringifiedLink: $stringifiedLink) {
      id
    }
  }
`;

MUTATION.DELETE_LINK = gql`
  mutation($linkId: ID!) {
    deleteLink(id: $linkId) {
      id
    }
  }
`;

export default MUTATION;
