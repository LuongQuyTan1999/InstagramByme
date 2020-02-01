import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography, Checkbox } from "@material-ui/core";
import styles from "./styles";
function TextCheckBoxComponent(props) {
  const { classes, title, content } = props;
  return (
    <Grid item xs={12} className={classes.container}>
      <Grid container  className={classes.typoContent}>
        <Grid item xs={1} className={classes.boxCheckbox}>
          <Checkbox
            // defaultChecked
            size="small"
            value="small"
            inputProps={{ "aria-label": "checkbox with small size" }}
            className={classes.Checkboxx}
          />
        </Grid>

        <Grid item xs={11}>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className={classes.title}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.content}>
        {content}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(TextCheckBoxComponent);
