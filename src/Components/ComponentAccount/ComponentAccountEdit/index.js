import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import styles from "./styles";
import InputComponent from "../../../Components/InputComponent";
import AvatarComponent from "../../../Components/AvatarComponent";
import ButtonComponent from "../../../Components/ButtonComponent";

function ComponentAccountEdit(props) {
  const { classes, handleSubmit } = props;
  return (
    <Grid>
      <AvatarComponent
        avatar="https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/18382658_243431509466751_6977120573591650304_a.jpg?_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_ohc=2HzVbiJQbCYAX-qS7nA&oh=7e84fc20f73bf13c6e487b81d704e740&oe=5EDC02A3"
        altAvatar="luongquytan"
      />

      <Grid item>
        <form onSubmit={handleSubmit}>
          <InputComponent forLabel="name" label="Tên" />

          <InputComponent forLabel="userName" label="Tên người dùng" />

          <InputComponent forLabel="website" label="Tên Websit" />

          <Grid container className={classes.containerInput}>
            <Grid item xs={12} sm={3} className={classes.inputLabel}>
              <label htmlFor ="story">Tiểu sử</label>
            </Grid>
            <Grid
              item
              xs={12}
              sm={9}
              id="story"
              className={classes.input}
              style={{ height: "90px" }}
            >
              <textarea className={classes.inputContent} type="text" />
            </Grid>
          </Grid>
          <Grid container className={classes.containerInput}>
            <Grid item xs={12} sm={3} className={classes.inputLabel}></Grid>
            <Grid
              item
              xs={12}
              sm={9}
              className={classes.input}
              style={{ borderBottom: "1px solid #fbfbfb" }}
            >
              <Typography>Thông tin riêng tư</Typography>
            </Grid>
          </Grid>
          <InputComponent forLabel="email" label="Email" />

          <InputComponent forLabel="numberPhone" label="Số điện thoại" />

          <Grid container className={classes.containerInput}>
            <Grid item xs={12} sm={3} className={classes.inputLabel}></Grid>
            <Grid item xs={12} sm={9} className={classes.input}>
              <Button variant="contained" color="primary">
                Xác thực số điện thoại
              </Button>
            </Grid>
          </Grid>

          <InputComponent forLabel="gender" label="Giới tính" />

          <Grid container className={classes.containerInput}>
            <Grid item xs={12} sm={3} className={classes.inputLabel}>
              <label htmlFor ="account">Gợi ý tài khoản tương tự</label>
            </Grid>
            <Grid item xs={12} sm={9} className={classes.input}>
              <Typography variant="body1" id="account" gutterBottom>
                Bao gồm tài khoản của bạn khi đề xuất tài khoản tương tự mà mọi
                người có thể muốn theo dõi.
              </Typography>
            </Grid>
          </Grid>

          <ButtonComponent
            textButton="Save"
            textTypo="Tài khoản tạm thời bị vô hiệu hóa"
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentAccountEdit);
