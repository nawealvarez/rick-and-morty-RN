import { Paper, Typography } from "@material-ui/core";
import Spinner from '../components/Spinner';

import { getOneCharacter } from "../resolvers/Characters";

interface Props {
  id: string;
}

const CharDetail: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = getOneCharacter(id);
  const character = data?.character;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error.</p>
      ) : character ? (
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
            <b>Name: {character.name}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Type: {character.type}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Gender: {character.gender}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Species: {character.species}</b>
          </Typography>
          <img
            style={{ marginRight: "20px" }}
            alt="character"
            src={character.image}
          />
        </Paper>
      ) : (
        <p>No data.</p>
      )}
    </>
  );
};

export default CharDetail;
