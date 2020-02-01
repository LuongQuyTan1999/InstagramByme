import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import styles from "./styles";
import GoogleMapComponent from "../../GoogleMapComponent";
function TextCheckBoxComponent(props) {
  const { classes } = props;
  const [googleMap, isGoogleMap] = useState(false);
  const handleMap = () => {
    isGoogleMap(!googleMap);
  };
  return (
    <Grid item xs={12} className={classes.container}>
      <Grid container>
        <Grid item xs={12} className={classes.boxHeader}>
          <Typography variant="h2" gutterBottom className={classes.textHeader}>
            Hoạt động đăng nhập
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} className={classes.boxHeader}>
          <Typography variant="h4" gutterBottom className={classes.textTitle}>
            Nơi bạn đã đăng nhập
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.location} onClick={handleMap}>
        <Grid item xs={1}>
          <LocationOnOutlinedIcon />
        </Grid>
        <Grid item xs={10}>
          <Grid item>Da Nang, Vietnam</Grid>
          <Grid item style={{ color: "#70C050" }}>
            Dang Hoat Dong
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <ArrowDropDownOutlinedIcon
            className={googleMap ? classes.isTransform : ""}
          />
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.boxContainer}
        style={googleMap ? { display: "block" } : { display: "none" }}
      >
        <Grid item xs={12} className={classes.boxGoogleMap}>
          <GoogleMapComponent />
        </Grid>
        <Grid item xs={12} className={classes.boxTypo}>
          <Typography variant="h2" gutterBottom className={classes.textHeader}>
            Đăng xuất
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(TextCheckBoxComponent);
