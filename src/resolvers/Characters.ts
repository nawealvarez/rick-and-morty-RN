import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { CharacterQuery, CharactersQuery} from '../interfaces';

const ALL_CHARACTERS = gql`
  query($name: String, $type: String, $page: Int) {
  characters(page: $page, filter: { name: $name, type: $type }) {
    info {
      next
      count
      pages
    }
      results {
        id
        name
        image
      }
    }
  }
`;

const ONE_CHARACTER= gql`
  query ($id: ID!) {
      character (id: $id) {
       id
       name
       image
       type
       gender
       species
      }
  }
`;

export const getAllCharacters = (by: string, search: string, page: number=1) => {
  const results = useQuery<CharactersQuery>(ALL_CHARACTERS, 
    {variables: {[by]: search, page}, 
    fetchPolicy: "network-only" });
  return results;
}

export const getOneCharacter = (id: string) => {
  const results = useQuery<CharacterQuery>(ONE_CHARACTER, {variables: {id}});
  return results;
}