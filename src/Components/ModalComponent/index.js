import React, { useState } from "react";
import {
  Grid,
  Avatar,
  Typography,
  Modal,
  Backdrop,
  Fade
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import styles from "./styles";
import InputModalComponent from "../InputModalComponent";

function ComponentHeader(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SettingsIcon onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open} style={{outline: "none"}}>
          <Grid container className={classes.paper}>
            <InputModalComponent
              content="Đổi mật khẩu"
              to="/account/password"
            />
            <InputModalComponent content="Thẻ tên" />
            <InputModalComponent
              content="Ứng dụng và trang web"
              to="/account/password"
            />
            <InputModalComponent content="Thông báo" />
            <InputModalComponent
              content="Bảo mật và quyền riêng tư"
              to="/account/privacy_and_security"
            />
            <InputModalComponent
              content="Hoạt động đăng nhập"
              to="/account/login_activity"
            />
            <InputModalComponent
              content="Email từ Instagram"
              to="/account/email"
            />
            <InputModalComponent content="Báo cáo sự cố" />
            <InputModalComponent content="Đăng xuất" />
            <InputModalComponent content="Hủy" locationBottom={true} />
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(ComponentHeader);
