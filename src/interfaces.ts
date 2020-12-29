export interface Character {
    id: string;
    name: string;
    image: string;
    type: string;
    gender: string;
    species: string;
  }
  
export interface CharactersQuery {
    characters: {
      info: Pages;
      results: Character[];
    };
  }

export interface CharacterQuery {
  character: Character;
  }

 export interface Pages {
    pages: number;
    next: number;
    prev: number;
  }
  
  export interface CharsVars {
    name: string;
    type: string;
    page: number;
  }
  
  export interface CharVars {
    id: string; 
  }

export interface Location {
  id: string
  name: string
  type: string
  dimension: string
  residents: Character[]
}

export interface LocationsQuery {
  locations: {
    info: Pages;
    results: Location[];
  };
}

export interface LocationQuery {
  location: Location;
  }

  export interface Episode {
    id: string
    name: string
    air_date: string
    episode: string
    characters: Character[]
  }
  
  export interface EpisodesQuery {
    episodes: {
      info: Pages;
      results: Episode[];
    };
  }
  
  export interface EpisodeQuery {
    episode: Episode;
    }