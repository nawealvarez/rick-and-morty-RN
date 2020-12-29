import { Paper, Typography } from "@material-ui/core";
import Spinner from '../components/Spinner';

import { getOneLocation } from "../resolvers/Locations";

interface Props {
  id: string;
}

const locationDetail: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = getOneLocation(id);
  const location = data?.location;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error.</p>
      ) : location ? (
        <Paper
          elevation={10}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50vh",
            margin: "auto"
          }}
        >
          <Typography variant="subtitle1">
            <b>Name: {location.name}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Type: {location.type}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Dimension: {location.dimension}</b>
          </Typography>
          <Typography variant="subtitle1">
            <b>Residents:</b>
          </Typography>
          {location.residents.slice(0, 5).map((resident) => (
            <Typography variant="subtitle2">
              <b>{resident.name}</b>
            </Typography>
          ))}
        </Paper>
      ) : (
        <p>No data.</p>
      )}
    </>
  );
};

export default locationDetail;
