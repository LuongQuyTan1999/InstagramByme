import React, { useState } from "react";
import { withStyles, IconButton, CardActions } from "@material-ui/core";
import clsx from "clsx";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import styles from "./styles";
function CardActionComponent(props) {
  const { classes } = props;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" className={classes.icon}>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton aria-label="add to commnet" className={classes.icon}>
        <ChatBubbleIcon />
      </IconButton>
      <IconButton aria-label="share" className={classes.icon}>
        <SendOutlinedIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <BookmarkBorderOutlinedIcon />
      </IconButton>
    </CardActions>
  );
}

export default withStyles(styles)(CardActionComponent);
