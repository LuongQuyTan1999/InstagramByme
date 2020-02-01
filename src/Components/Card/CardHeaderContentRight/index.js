import React from "react";
import { withStyles, CardHeader, Avatar, Typography } from "@material-ui/core";
import styles from "./styles";
function CardHeaderContentRight(props) {
  const { classes, data } = props;
  console.log(data);

  return (
    <CardHeader
      avatar={
        <Avatar
          aria-label="recipe"
          src={require("../../../assets/18382658_243431509466751_6977120573591650304_a.jpg")}
          className={classes.avatar}
        >
          R
        </Avatar>
      }
      action={
        <Typography variant="body2" color="textSecondary" component="p">
          Theo dõi
        </Typography>
      }
      title={data.title}
      subheader={data.subHeader}
    />
  );
}

export default withStyles(styles)(CardHeaderContentRight);
