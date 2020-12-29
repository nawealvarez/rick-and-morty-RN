import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { LocationsQuery, LocationQuery } from '../interfaces';

const ALL_LOCATIONS = gql`
  query($name: String, $type: String, $page: Int) {
  locations(page: $page, filter: { name: $name, type: $type }) {
    info {
      pages
    }
      results {
        id
        name
        dimension
      }
    }
  }
`;

const ONE_LOCATION= gql`
  query ($id: ID!) {
      location (id: $id) {
       id
       name
       type
       dimension
       residents {
           name         
            }
        }
  }
`;

export const getAllLocations = (by: string, search: string, page: number=1) => {
  const results = useQuery<LocationsQuery>(ALL_LOCATIONS, {variables: {[by]: search, page}});
  return results;
}

export const getOneLocation = (id: string) => {
  const results = useQuery<LocationQuery>(ONE_LOCATION, {variables: {id}});
  return results;
}