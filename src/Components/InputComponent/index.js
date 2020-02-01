import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import styles from "./styles";

function InputComponent(props) {
  const { classes, forLabel, label } = props;
  return (
    <Grid container className={classes.containerInput}>
      <Grid item xs={12} sm={3} className={classes.inputLabel}>
        <label htmlFor ={forLabel}>{label}</label>
      </Grid>
      <Grid item xs={12} sm={9} className={classes.input}>
        <input className={classes.inputContent} id={forLabel} type="text" />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(InputComponent);
