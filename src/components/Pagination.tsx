import { Box, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagination: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      left: 0,
      bottom: 25,
      padding: 20,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

interface Props {
    totalPages: number | undefined;
    currentPage: number;
    handlePagination: (e: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent: React.FC<Props> = ({totalPages, currentPage, handlePagination}) => {
  const classes = useStyles();
  
  return (
    
    <Box className={classes.pagination}>
    <Grid item>
      <Pagination
        boundaryCount={3}
        count={totalPages}
        onChange={handlePagination}
        page={currentPage}
        showFirstButton={true}
        showLastButton={true}
      />
    </Grid>
  </Box>
)};

export default PaginationComponent;

