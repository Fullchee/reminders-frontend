import gql from "graphql-tag";

const MUTATION = {};

// MUTATION.UPDATE_LINK = gql`
//   mutation{
//     updateLink($linkcontent) {
//       id
//     }
//   }`;

MUTATION.DELETE_LINK = gql`
  mutation($linkId: ID!) {
    deleteLink(id: $linkId) {
      id
    }
  }
`;

export default MUTATION;
