import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Map, GoogleApiWrapper } from "google-maps-react";
import styles from "./styles";
function GoogleMapComponent(props) {
  const { classes } = props;
  return (
    <Grid item className={classes.container}>
      <Map
        google={props.google}
        zoom={8}
        className={classes.mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      ></Map>
    </Grid>
  );
}

export default withStyles(styles)(
  GoogleApiWrapper({
    // apiKey: "TOKEN HERE"
  })(GoogleMapComponent)
);
