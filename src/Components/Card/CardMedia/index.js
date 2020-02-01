import React from "react";
import { withStyles, CardMedia } from "@material-ui/core";
import styles from "./styles";

function CardMediaComponent(props) {
  const { classes, data } = props;
  return (
    <div className={classes.media}>
      <CardMedia
        className={classes.media}
        image={data.imageMedia}
        title="Paella dish"
      />
    </div>
  );
}

export default withStyles(styles)(CardMediaComponent);
