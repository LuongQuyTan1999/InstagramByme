import React, { useEffect } from "react";
import { withStyles, Box } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as userAction from "../../actions/userPesonal";

import styles from "./styles";
import ComponentHeader from "../../Components/ComponentUserPersonal/ComponentHeader";
import ComponentName from "../../Components/ComponentUserPersonal/ComponentName";
import ComponentPostFollow from "../../Components/ComponentUserPersonal/ComponentPostFollow";
import ComponentImageVideo from "../../Components/ComponentUserPersonal/ComponentImageVideo";
import ComponentListImage from "../ComponentListImage";

function PersonalPage(props) {
  const { getUserPersonalAction, children, classes } = props;
  const { getUserPersonal } = getUserPersonalAction;
  useEffect(() => {
    getUserPersonal();
  }, [getUserPersonal]);

  return (
    <div>
      <Box component="div" pt={15} className={classes.container}>
        <ComponentHeader />
        <ComponentName />
        <ComponentPostFollow />
        <ComponentImageVideo />
        <>{children ? children : <ComponentListImage />}</>
      </Box>
    </div>
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
  connect(mapStateToProps, mapDispatchToProps)(PersonalPage)
);
