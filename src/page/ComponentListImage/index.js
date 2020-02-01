import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import * as userAction from "../../actions/userPesonal";

import styles from "./styles";
function ComponentListImage(props) {
  const { classes, data } = props;
  const showImage = () => {
    let result = null;
    if (data.length > 0) {
      result = data.map((d, index) => {
        const listImage = d.image.map((img, index) => {
          return (
            <Grid item xs={4} className={classes.typogra} key={index}>
              <Grid className={classes.hoverDiv}>
                <Grid container className={classes.boxIncon}>
                  <Grid item className={classes.contentIcon}>
                    <FavoriteIcon style={{ marginRight: "7px" }} />
                    <Typography
                      variant="overline"
                      display="inline"
                      gutterBottom
                      className={classes.typoIcon}
                    >
                      4
                    </Typography>
                  </Grid>
                  <Grid item className={classes.contentIcon}>
                    <ModeCommentIcon style={{ marginRight: "7px" }} />
                    <Typography
                      variant="overline"
                      display="inline"
                      gutterBottom
                      className={classes.typoIcon}
                    >
                      9
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <img src={img} alt="" style={{ width: "100%" }} />
            </Grid>
          );
        });
        return listImage;
      });
    }
    return result;
  };
  return (
    <Grid container className={classes.baivietnguoitheodoi}>
      <Grid container>{showImage()}</Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    data: state.userPersonal.dataUserPersonal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserPersonalAction: bindActionCreators(userAction, dispatch)
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ComponentListImage)
);
