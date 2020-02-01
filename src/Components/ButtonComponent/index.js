import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import styles from "./styles";

function ComponentAccountEdit(props) {
  const { classes, textButton, textTypo} = props;
  return (
    <Grid>
      <Grid container className={classes.containerInput}>
        <Grid item xs={12} sm={3} className={classes.inputLabel}></Grid>
        <Grid item xs={12} sm={9} className={classes.input}>
          <Button variant="contained" color="primary">
            {textButton}
          </Button>
        </Grid>
      </Grid>

      <Grid container className={classes.containerInput}>
        <Grid item xs={12} sm={3} className={classes.inputLabel}></Grid>
        <Grid item xs={12} sm={9} className={classes.input}>
          <Typography variant="body1" id="account" gutterBottom>
            {textTypo}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentAccountEdit);
