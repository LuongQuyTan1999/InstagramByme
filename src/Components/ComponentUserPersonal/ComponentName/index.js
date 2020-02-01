import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";

import styles from "./styles";

function ComponentName(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.containerName}>
      <Typography
        variant="h1"
        component="h2"
        gutterBottom
        className={classes.name}
      >
        Lương Quý Tân
      </Typography>
    </Grid>
  );
}

export default withStyles(styles)(ComponentName);
