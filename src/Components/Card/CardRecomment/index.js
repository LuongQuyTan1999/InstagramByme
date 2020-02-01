import React from "react";
import { withStyles, Box } from "@material-ui/core";
import styles from "./styles";
function CardRecomment(props) {
  const { classes } = props;
  return (
    <Box component="span">
      <input
        className={classes.recomment}
        type="text"
        placeholder="Thêm bình luận..."
      />
    </Box>
  );
}

export default withStyles(styles)(CardRecomment);
