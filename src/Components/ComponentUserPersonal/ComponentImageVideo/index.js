import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import GridOnOutlinedIcon from "@material-ui/icons/GridOnOutlined";
import styles from "./styles";

function ComponentImageVideo(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.baivietnguoitheodoi}>
      <Grid item className={classes.icon}>
        <Link to="/luongquytan" className={classes.link}>
          <Grid item className={classes.typogra}>
            <GridOnOutlinedIcon />
            <Typography
              variant="overline"
              display="inline"
              className={classes.typoIcon}
              gutterBottom
            >
              BÀI VIẾT
            </Typography>
          </Grid>
        </Link>
      </Grid>
      <Grid item className={classes.icon}>
        <Link to="/luongquytan/channel" className={classes.link}>
          <Grid item className={classes.typogra}>
            <LiveTvOutlinedIcon />
            <Typography
              variant="overline"
              display="inline"
              className={classes.typoIcon}
              gutterBottom
            >
              IGTV
            </Typography>
          </Grid>
        </Link>
      </Grid>
      <Grid item className={classes.icon}>
        <Link to="/luongquytan/save" className={classes.link}>
          <Grid item className={classes.typogra}>
            <BookmarkBorderOutlinedIcon />
            <Typography
              variant="overline"
              display="inline"
              className={classes.typoIcon}
              gutterBottom
            >
              ĐÃ LƯU
            </Typography>
          </Grid>
        </Link>
      </Grid>
      <Grid item className={classes.iconFinal}>
        <Link to="/luongquytan/target" className={classes.link}>
          <Grid item className={classes.typogra}>
            <AssignmentIndOutlinedIcon />
            <Typography
              variant="overline"
              display="inline"
              className={classes.typoIcon}
              gutterBottom
            >
              ĐƯỢC GẮN THẺ
            </Typography>
          </Grid>
        </Link>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentImageVideo);
