import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { EpisodesQuery, EpisodeQuery } from '../interfaces';

const ALL_EPISODES = gql`
  query($name: String, $episode: String, $page: Int) {
  episodes(page: $page, filter: { name: $name, episode: $episode }) {
    info {
      pages
    }
      results {
        id
        name
        episode
      }
    }
  }
`;

const ONE_EPISODE= gql`
  query ($id: ID!) {
      episode (id: $id) {
       id
       name
       air_date
       episode
       characters {
           name         
            }
        }
  }
`;

export const getAllEpisodes = (by: string, search: string, page: number=1) => {
  const results = useQuery<EpisodesQuery>(ALL_EPISODES, {variables: {[by]: search, page}});
  return results;
}

export const getOneEpisode = (id: string) => {
  const results = useQuery<EpisodeQuery>(ONE_EPISODE, {variables: {id}});
  return results;
}