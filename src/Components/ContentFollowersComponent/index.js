import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import styles from "./styles";

function ContentFollowersComponent(props) {
  const { classes, avatar, name, fullname, contentButton } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={1}>
        <Avatar alt="Remy Sharp" src={avatar} />
      </Grid>
      <Grid item xs={8} className={classes.contentText}>
        <Grid item>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.typography}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.typography}
          >
            {fullname}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={3} className={classes.contentButton}>
        <button type="button" className={classes.button}>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            style={{ marginBottom: "0px" }}
          >
            {contentButton}
          </Typography>
        </button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ContentFollowersComponent);
