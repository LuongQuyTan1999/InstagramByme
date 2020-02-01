import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import styles from "./styles";
import TextCheckBoxComponent from "../../TextCheckBoxComponent";
import TitleComponent from "../../TitleComponent";
function ComponentAccountPassword(props) {
  const { classes } = props;
  return (
    <Grid className={classes.boxContainer}>
      <TitleComponent title="Đăng ký:" />
      <Grid container>
        <TextCheckBoxComponent
          title="Email phản hồi"
          content="Phản hồi về Instagram"
        />
        <TextCheckBoxComponent
          title="Email lời nhắc"
          content="Nhận thông báo mà bạn có thể đã bỏ lở"
        />
        <TextCheckBoxComponent
          title="Email về sản phẩm"
          content="Xem mẹo về công cụ về Instagram"
        />
        <TextCheckBoxComponent
          title="Email tin tức"
          content="Tìm hiểu về các tín năng mới của Instagram"
        />
        <TextCheckBoxComponent
          title="Tin nhắn văn bản (SMS)"
          content="Nhận thông báo bằng tin nhắn văn bản"
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentAccountPassword);
