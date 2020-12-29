import { Grid } from "@material-ui/core";

const Spinner: React.FC = () => {
  return (
    <Grid item 
    style={{position: "absolute", top: "35%", left: "50%" }}>
      <img src="/portal-rick-and-morty.gif" alt="spinner" width="150px"
       style={{margin: "auto"}}  />
    </Grid>
  );
};

export default Spinner;
