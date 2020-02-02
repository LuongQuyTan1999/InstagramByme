import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import styles from "./styles";

function InputModalComponent(props) {
  const { classes, content, locationBottom, to, styleColor } = props;

  return (
    <Grid
      item
      xs={12}
      className={classes.boxLink}
      style={
        locationBottom
          ? { borderBottom: "none" }
          : { borderBottom: "1px solid #DDDDDD" }
      }
    >
      <Link to={to} className={classes.link}>
        <Typography
          variant="h4"
          gutterBottom
          className={classes.typoH4}
          style={styleColor ? { color: "red" } : { color: "#555555" }}
        >
          {content}
        </Typography>
      </Link>
    </Grid>
  );
}

export default withStyles(styles)(InputModalComponent);
