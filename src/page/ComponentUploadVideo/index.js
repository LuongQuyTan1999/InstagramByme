import React, { useState } from "react";
import {
  withStyles,
  Grid,
  Box,
  Typography,
  TextField,
  Radio,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles";

function ComponentUploadVideo(props) {
  const { classes } = props;
  const [valueFile, setValueFile] = useState(false);
  const handleFile = e => {
    setValueFile(true);
  };
  return (
    <Box component="div" pt={8}>
      <Grid container className={classes.container}>
        <Grid item xs={4} className={classes.containerBoxLeft}>
          <label>
            <input
              type="file"
              name="valueFile"
              onChange={handleFile}
              style={{ display: "none" }}
            />

            <Grid className={classes.contentBox}>
              <Grid
                item
                className={classes.video}
                style={valueFile ? { display: "block" } : { display: "none" }}
              >
                <video width="100%" height="100%" controls>
                  <source src="" type="video/mp4" />
                  <source src="" type="video/ogg" />
                </video>
              </Grid>
              <Grid className={classes.contentBoxLeft}></Grid>
              <Grid item className={classes.icon}>
                <AddIcon />
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.textFile}
                >
                  Kéo và thẻ file video
                </Typography>
              </Grid>
              <Grid item className={classes.textFile1}>
                <Typography variant="body2" gutterBottom>
                  Video của bạn phải có thời lượng từ 1 giây đến 60 phút, ở định
                  dạng dọc hoặc ngang và là file MP4 nhỏ hơn 3.6 GB.
                </Typography>
              </Grid>
            </Grid>
          </label>
        </Grid>

        <Grid item xs={8} className={classes.containerBoxRight}>
          <Grid item>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              className={classes.title}
            >
              Thêm video mới trên IGTV
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              className={classes.anhbia}
            >
              Ảnh bìa
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              className={classes.quydinhfile}
            >
              Phải là file JPG hoặc PNG. Kích thước tối thiểu được đề xuất là
              492 x 762 pixel.
            </Typography>
          </Grid>
          <Grid item>
            <Grid item className={classes.khunghinh}>
              <Grid
                item
                className={classes.video}
                style={valueFile ? { display: "block" } : { display: "none" }}
              >
                <video width="100%" height="100%" controls>
                  <source src="" type="video/mp4" />
                  <source src="" type="video/ogg" />
                </video>
              </Grid>
            </Grid>
            <label>
              <input
                type="file"
                name="valueFile"
                onChange={handleFile}
                style={{ display: "none" }}
              />
              <Grid item style={{ color: "#3897f0" }}>
                Chỉnh sửa
              </Grid>
            </label>
          </Grid>

          <Grid item>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              className={classes.anhbia}
            >
              Chi Tiết
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: "8px" }}>
            <TextField
              id="outlined-password-input"
              label="Tiêu đề"
              type="text"
              autoComplete="current-password"
              variant="outlined"
              className={classes.input}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-password-input"
              label="Mô tả"
              type="text"
              autoComplete="current-password"
              variant="outlined"
              className={classes.input}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              className={classes.anhbia}
            >
              Nơi hiển thị video
            </Typography>
          </Grid>
          <Grid item className={classes.radio}>
            <Grid item>
              <Radio color="primary" />
            </Grid>
            <Grid item style={{ padding: "9px 0px 13px 0px " }}>
              <Grid>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  className={classes.radioTypo}
                >
                  IGTV
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  className={classes.radioTypo}
                >
                  Luongquytan
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.radio}>
            <Grid item>
              <Radio color="primary" />
            </Grid>
            <Grid item style={{ padding: "9px 0px 13px 0px " }}>
              <Grid>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  className={classes.radioTypo}
                >
                  IGTV và trang Facebook
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  className={classes.radioTypo}
                >
                  Kết nối trang
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              className={classes.quydinhfile}
            >
              Bạn sẽ tiếp cận được nhiều người hơn khi hiển thị video trên IGTV
              và Trang Facebook.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Đăng
            </Button>
            <span className={classes.textSave}>Lưu bản nháp</span>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.containerBottom}>
          <Typography variant="overline" display="block" gutterBottom>
            YÊU CẦU VỀ VIDEO IGTV
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withStyles(styles)(ComponentUploadVideo);
