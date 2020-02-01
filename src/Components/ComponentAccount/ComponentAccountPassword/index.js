import React from "react";
import { Grid } from "@material-ui/core";
import AvatarComponent from "../../AvatarComponent";
import InputComponent from "../../InputComponent";
import ButtonComponent from "../../ButtonComponent";
function ComponentAccountPassword() {
  return (
    <Grid>
      <AvatarComponent
        avatar="https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/18382658_243431509466751_6977120573591650304_a.jpg?_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_ohc=2HzVbiJQbCYAX-qS7nA&oh=7e84fc20f73bf13c6e487b81d704e740&oe=5EDC02A3"
        altAvatar="luongquytan"
      />
      <form>
        <InputComponent forLabel="oldPassword" label="Mật khẩu cũ" />
        <InputComponent forLabel="newPassword" label="Mật khẩu mới" />
        <InputComponent
          forLabel="reNewPassword"
          label="Xác nhận mật khẩu mới"
        />
        <ButtonComponent textButton="Đổi mật khẩu" textTypo="Quên mật khẩu?" />
      </form>
    </Grid>
  );
}

export default ComponentAccountPassword;
