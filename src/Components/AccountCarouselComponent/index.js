import React from "react";
import {
  withStyles,
  Box,
  Grid,
  Typography,
  Avatar,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";

function AccountCarouselComponent(props) {
  const { classes, avatar, name, status } = props;

  return (
    <Grid item xs={3} className={classes.carouselExplore}>
      <Avatar
        alt="Remy Sharp"
        src={avatar}
      />
      <Grid item className={classes.textName}>
        <Typography variant="subtitle1" gutterBottom>
          {name}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {status}
        </Typography>
      </Grid>
      <Button variant="contained" color="primary">
        Theo doi
      </Button>
    </Grid>
  );
}

export default withStyles(styles)(AccountCarouselComponent);
