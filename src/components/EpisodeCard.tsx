import { useState } from "react";
import Modal from "react-modal";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Episode } from "../interfaces";
import EpisodeDetail from "./EpisodeDetail";

Modal.setAppElement("#__next");

interface Props {
  episode: Episode;
}

const EpisodeCard: React.FC<Props> = ({ episode }) => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <Grid item>
        <Paper
          onClick={() => setToggleModal(true)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="subtitle1">
            <b>{episode.name}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>{episode.episode}</b>
          </Typography>
        </Paper>
      </Grid>

      <Modal
        isOpen={toggleModal}
        onRequestClose={() => setToggleModal(false)}
        shouldCloseOnOverlayClick={false}
      >
        <button style={{ color: "red" }} onClick={() => setToggleModal(false)}>
          x
        </button>
        <EpisodeDetail id={episode.id} />
      </Modal>
    </>
  );
};

export default EpisodeCard;
