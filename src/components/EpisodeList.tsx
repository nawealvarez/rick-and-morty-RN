import { Grid } from "@material-ui/core";
import { Episode } from "../interfaces";
import EpisodeCard from "./EpisodeCard";

interface Props {
    episodes: Episode[];
}

const EpisodeList: React.FC<Props> = ({ episodes }) => {
  return (
    <Grid container item spacing={4}>
      {episodes.map((episode) => (
        <Grid item>
          <EpisodeCard key={episode.id} episode={episode} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EpisodeList;