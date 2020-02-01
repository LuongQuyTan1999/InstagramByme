import React from "react";
import { withStyles } from "@material-ui/styles";
import {
  Grid,
  Typography,
  Avatar,
} from "@material-ui/core";
import styles from "./styles";

function ComponentAccountEdit(props) {
  const { classes, avatar, altAvatar} = props;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={2} sm={3} className={classes.avatar}>
        <Avatar
          alt={altAvatar}
          src={avatar}
        />
      </Grid>
      <Grid item xs={10} sm={9} className={classes.labelAvatar}>
        <Typography
          variant="h5"
          display="block"
          gutterBottom
          className={classes.textAvatar}
        >
          {altAvatar}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Thây đổi ảnh đại diện
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentAccountEdit);
