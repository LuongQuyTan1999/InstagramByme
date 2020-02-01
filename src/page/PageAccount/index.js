import React from "react";
import { withStyles, Box, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ComponentAccountEdit from "../../Components/ComponentAccount/ComponentAccountEdit";
import styles from "./styles";
function PageAccount(props) {
  const { classes, children } = props;

  return (
    <div>
      <Box component="div" pt={15}>
        <Grid container className={classes.container}>
          <Grid item className={classes.containerLeft} xs={3}>
            <Grid className={classes.contextLeft}>
              <Grid>
                <Link to="/account/edit" className={classes.link}>
                  <Typography className={classes.typography}>
                    Chỉnh sửa trang cá nhân
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link to="/account/password" className={classes.link}>
                  <Typography className={classes.typography}>
                    Đổi mặt khẩu
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link to="/account/manage_access" className={classes.link}>
                  <Typography className={classes.typography}>
                    Ứng dụng và trang web
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link to="/account/email" className={classes.link}>
                  <Typography className={classes.typography}>
                    Email và SMS
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link to="/account/contact_history" className={classes.link}>
                  <Typography className={classes.typography}>
                    Quản lý danh bạ
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link
                  to="/account/privacy_and_security"
                  className={classes.link}
                >
                  <Typography className={classes.typography}>
                    Bảo mật và quyền riêng tư
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link to="/account/login_activity" className={classes.link}>
                  <Typography className={classes.typography}>
                    Hoạt động đăng nhập
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.ContainerRight} xs={12} sm={9}>
            <>{children ? children : <ComponentAccountEdit />}</>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default withStyles(styles)(PageAccount);
