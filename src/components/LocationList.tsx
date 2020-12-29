import { Grid } from "@material-ui/core";
import { Location } from "../interfaces";
import LocationCard from "./LocationCard";

interface Props {
    locations: Location[];
}

const LocationList: React.FC<Props> = ({ locations }) => {
  return (
    <Grid container item spacing={4}>
      {locations.map((location) => (
        <Grid item>
          <LocationCard key={location.id} location={location} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LocationList;