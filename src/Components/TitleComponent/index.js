import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
function ComponentAccountPassword(props) {
  const { classes, title } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.typoContainer} gutterBottom>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentAccountPassword);
