import React from "react";
import { withStyles, Grid } from "@material-ui/core";

import styles from "./styles";
import FollowersComponent from "../../FollowersComponent";

function ComponentPostFollow(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.baivietnguoitheodoi}>
      <Grid item xs={4}>
        <Grid item>11</Grid>
        <Grid item className={classes.typogra}>
          bài viết
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid item>75</Grid>
        <Grid item className={classes.typogra}>
          <FollowersComponent title="người theo dõi" />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid item className={classes.typogra}>
          Đang theo dõi
        </Grid>
        <Grid item>13</Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentPostFollow);
