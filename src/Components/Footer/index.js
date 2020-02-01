import React from "react";
import { withStyles, Box, Grid, Typography } from "@material-ui/core";
import styles from "./styles";

function Footer(props) {
  const { classes } = props;
  return (
    <Box component="div" className={classes.container}>
      <Grid container className={classes.content}>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            GỚP THIỆU VỀ CHÚNG TÔI
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            TRỢ GIÚP
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            BÁO CHÍ
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            API
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            VIỆC LÀM
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            QUYỀN RIÊNG TƯ
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            ĐIỀU KHOẢN
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            THƯ MỰC
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            TRANG CÁ NHÂN
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            HASTAG
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="overline"
            className={classes.typography}
            display="block"
            gutterBottom
          >
            NGÔN NGỮ
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.hastag}>
        <Grid item>2020 LUONG QUY TAN</Grid>
      </Grid>
    </Box>
  );
}

export default withStyles(styles)(Footer);
