import React from "react";
import { withStyles, Grid, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import styles from "./styles";
const ListChannel = props => {
  const { classes, titleUpload, titleConvention, isButton } = props;
  return (
    <Box component="div">
      <Grid className={classes.Boxcontainer}>
        <Grid container className={classes.container}>
          <Grid item className={classes.Icon}>
            <LiveTvOutlinedIcon className={classes.IconImage} />
          </Grid>
          <Grid item className={classes.Upload}>
            {titleUpload}
          </Grid>
          <Grid item className={classes.Convention}>
            {titleConvention}
          </Grid>
          <Grid
            item
            className={classes.Button}
            style={isButton ? { display: "block" } : { display: "none" }}
          >
            <Link to="/tv/upload">
              <Button variant="contained" color="primary">
                Tải Lên
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default withStyles(styles)(ListChannel);
