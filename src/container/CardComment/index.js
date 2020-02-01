import React from "react";
import { CardContent, Typography } from "@material-ui/core";

function CardCommentComponent(props) {
  const { data } = props;

  const showComment = () => {
    let result = null;
    if (data.length > 0) {
      result = data.map((d, index) => {
        return (
          <Typography paragraph key={index}>
            {d}
          </Typography>
        );
      });
    }
    return result;
  };

  return (
    <div>
      <CardContent>
        <Typography paragraph>6 lượt thích</Typography>
        {showComment()}
      </CardContent>
    </div>
  );
}

export default CardCommentComponent;
