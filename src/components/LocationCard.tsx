import { useState } from "react";
import Modal from "react-modal";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Location } from "../interfaces";
import LocationDetail from "./LocationDetail";

Modal.setAppElement("#__next");

interface Props {
  location: Location;
}

const LocationCard: React.FC<Props> = ({ location }) => {
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
            <b>{location.name}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>{location.dimension}</b>
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
        <LocationDetail id={location.id} />
      </Modal>
    </>
  );
};

export default LocationCard;
