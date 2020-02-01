import React from "react";
import { Card, withStyles } from "@material-ui/core";
import CardHeaderComponent from "../CardHeader";
import CardContentComponent from "../../CardContent";
import styles from "./styles";

function ContentBody(props) {
  const { classes, data } = props;
  return (
    <Card className={classes.card}>
      <CardHeaderComponent data={data}/>
      <CardContentComponent data={data}/>
    </Card>
  );
}

export default withStyles(styles)(ContentBody);
