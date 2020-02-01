import React, { useState } from "react";
import {
  Grid,
  Avatar,
  Typography,
  Modal,
  Backdrop,
  Fade
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "./styles";
import ModalComponent from "../../ModalComponent";
function ComponentHeader(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container className={classes.containerHeader}>
      <Grid item className={classes.avatar}>
        <Avatar
          alt="Luong Quy Tan"
          src={
            "https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/18382658_243431509466751_6977120573591650304_a.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=2HzVbiJQbCYAX_iYdow&oh=14e2d14a676271b69b18d386f1556bc0&oe=5EA2E253"
          }
          className={classes.large}
        />
      </Grid>
      <Grid item xs={8} className={classes.contentHeader}>
        <Grid container className={classes.infomation}>
          <Grid item className={classes.infoContent}>
            <Typography
              variant="h1"
              component="h2"
              style={{ fontSize: "25px" }}
              gutterBottom
            >
              luongquytan
            </Typography>
          </Grid>
          <Grid item className={(classes.infoContent, classes.infoContentsm)}>
            <Link to="/account/edit" style={{ textDecoration: "none" }}>
              <Typography
                variant="button"
                display="block"
                className={classes.chinhsuatrangcanhanHeader}
                gutterBottom
              >
                Chỉnh sửa trang cá nhân
              </Typography>
            </Link>
          </Grid>
          <Grid item className={classes.infoContent} onClick={handleOpen}>
            <ModalComponent />
          </Grid>
        </Grid>

        <Grid container className={classes.postFollow}>
          <Grid item className={classes.postFollowContent}>
            11 Bai Viet
          </Grid>
          <Grid item className={classes.postFollowContent}>
            75 người theo dõi
          </Grid>
          <Grid item className={classes.postFollowContent}>
            Đang theo dõi 13 người
          </Grid>
        </Grid>

        <Grid container className={classes.name}>
          <Grid item>
            <Typography
              variant="h1"
              component="h2"
              style={{ fontSize: "17px", fontWeight: "500" }}
            >
              Lương Quý Tân
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.chinhsuatrangcanhan1}>
          <Grid item className={classes.chinhsuatrangcanhan}>
            <Typography
              variant="button"
              display="block"
              className={classes.typography}
              gutterBottom
            >
              Chỉnh sửa trang cá nhân
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentHeader);
