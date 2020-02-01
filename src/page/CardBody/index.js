import React, { useEffect } from "react";
import {
  withStyles,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles";
import * as actionApi from "../../actions/api";
import ContentBody from "../../Components/Card/ContentBody";
import CardHeaderContentRight from "../../Components/Card/CardHeaderContentRight";

function CardBody(props) {
  const { classes, getDataApiAction, dataState } = props;
  const { getDataApi } = getDataApiAction;

  useEffect(() => {
    getDataApi();
  }, [getDataApi]);

  const renderContentBody = () => {
    let result = null;
    if (dataState) {
      result = dataState.map((data, index) => {
        return <ContentBody key={index} data={data} />;
      });
    }
    return result;
  };
  const renderContentRight = () => {
    let result = null;
    if (dataState) {
      result = dataState.map((data, index) => {
        return <CardHeaderContentRight data={data} key={index} />;
      });
    }
    return result;
  };

  return (
    <div className={classes.bodyContent}>
      {/* ContentLeft */}
      <div className={classes.contentLeft}>{renderContentBody()}</div>
      {/* ContentRight */}
      <div className={classes.contentRight}>
        <Card className={classes.avatarRight}>
          <CardHeader
            avatar={
              <Link to="/luongquytan">
                <Avatar
                  aria-label="recipe"
                  src={require("../../assets/18382658_243431509466751_6977120573591650304_a.jpg")}
                  className={classes.avatar}
                >
                  R
                </Avatar>
              </Link>
            }
            title="luongquytan"
            subheader="Tan Quy Luong"
          />
        </Card>

        <Card>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Tin
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tin từ những người bạn theo dõi sẽ hiện thị ở đây.
            </Typography>
          </CardContent>
        </Card>

        <Card className={(classes.card, classes.cardContentRight)}>
          <Typography variant="body2" color="textSecondary" component="p">
            Gợi ý cho bạn
          </Typography>
          {renderContentRight()}
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dataState: state.api.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataApiAction: bindActionCreators(actionApi, dispatch)
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CardBody)
);
