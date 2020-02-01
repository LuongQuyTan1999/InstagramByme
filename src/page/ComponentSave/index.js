import React from "react";
import { withStyles, Grid, Box } from "@material-ui/core";
import styles from "./styles";
const ComponentSave = props => {
  const { classes } = props;
  return (
    <Box component="div" className={classes.container}>
      <Grid container className={classes.typography}>
        <Grid item>Chỉ có bạn mới xem được mục đã lưu</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4} className={classes.typogra}>
          <img
            src={
              "https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-15/e15/s320x320/66954271_1328634637260958_3963652672131263265_n.jpg?_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=jqVAUnfoR2MAX_UneUf&oh=c88b74299ad900b6d2a3ffa05e32ed4e&oe=5EBA497A"
            }
            alt=""
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4} className={classes.typogra}>
          <img
            src={
              "https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-15/e15/s320x320/61903798_507648360011050_2806440619895152192_n.jpg?_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=-hTom18Gps0AX9LGLvH&oh=6e8316701618b96d949d84387dd8d439&oe=5E22AEE4"
            }
            alt=""
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4} className={classes.typogra}>
          <img
            src={
              "https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/27893400_1935363360126319_7221326907894136832_n.jpg?_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_obGn01ZYyMAX9dElx6&oh=e2f15400b881a9f787c4a0389377be32&oe=5EB696B6"
            }
            alt=""
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4} className={classes.typogra}>
          <img
            src={
              "https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/28156191_355081144992660_905241679928229888_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=KJMdOnj0VV8AX8y7xM0&oh=d687d2aed820cf1743745a0ae4b1352b&oe=5EA87BEE"
            }
            alt=""
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default withStyles(styles)(ComponentSave);
