import React from "react";
import { withStyles, CardHeader, Avatar, IconButton } from "@material-ui/core";
import ModalHomeComponent from "../../ModalHomeComponent";
import styles from "./styles";

function CardHeaderComponent(props) {
  const { classes, data } = props;
  return (
    <CardHeader
      avatar={
        <Avatar
          aria-label="recipe"
          src={data.imageAvatar}
          className={classes.avatar}
        >
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <ModalHomeComponent />
        </IconButton>
      }
      title={data.title}
      // subheader="September 14, 2016"
    />
  );
}

export default withStyles(styles)(CardHeaderComponent);
