import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import TitleComponent from "../../TitleComponent";
import TextCheckBoxComponent from "../../TextCheckBoxComponent";
function ComponentAccountPrivacySecurity(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <TitleComponent title="Quyền riêng tư của tài khoản" />
        <TextCheckBoxComponent
          title="Tài khoản riêng tư"
          content="Khi tài khoản của bạn ở chế độ riêng tư, chỉ những người mà bạn phê duyệt mới được xem ảnh và video của bạn trên Instagram. Những người đang theo dõi bạn sẽ không bị ảnh hưởng"
        />
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <TitleComponent title="Trạng thái hoạt động" />
        <TextCheckBoxComponent
          title="Hiển thị trạng thái hoạt động"
          content="Cho phép tài khoản bạn theo dõi và bất kỳ ai bạn đã nhắn tin được xem thời điểm bạn hoạt động lần cuối trên ứng dụng Instagram. Khi tắt cài đặt này, bạn không thể nhìn thấy trạng thái hoạt động của các tài khoản khác."
        />
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <TitleComponent title="Chia sẻ tin" />
        <TextCheckBoxComponent
          title="Cho phép chia sẻ"
          content="Cho phép mọi người chia sẻ tin của bạn dưới dạng tin nhắn"
        />
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <TitleComponent title="Bình luận" />
        <Link to="" className={classes.link}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.typographyLink}
          >
            Chỉnh sửa cài đặt bình luận
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <TitleComponent title="Ảnh có mặt bạn" />
        <TextCheckBoxComponent
          title="Tự động thêm"
          content="Chọn cách bạn muốn thêm ảnh mình vào trang cá nhân"
        />
      </Grid>

      <Grid item xs={12} className={classes.content}>
        <TitleComponent title="Dữ liệu tài khoản" />
        <Link to="" className={classes.link}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.typographyLink}
          >
            Xem dữ liệu tài khoản
          </Typography>
        </Link>
      </Grid>

      <Grid item xs={12} className={classes.content}>
        <TitleComponent title="Xác thự 2 yếu tố" />
        <Link to="" className={classes.link}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.typographyLink}
          >
            Chỉnh sửa cài đặt xác thực 2 yếu tố
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <TitleComponent title="Tải dữ liệu xuống" />
        <Link to="" className={classes.link}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.typographyLink}
          >
            Yêu cầu tải xuống
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.content}
        style={{ borderBottom: "none" }}
      >
        <TitleComponent title="Trợ giúp về bảo mật và quyền riêng tư" />
        <Link to="" className={classes.link}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.typographyLink}
          >
            Hỗ trợ
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComponentAccountPrivacySecurity);
