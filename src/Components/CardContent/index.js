import React from "react";
import CardMediaComponent from "../Card/CardMedia";
import CardActionComponent from "../Card/CardAction";
import CardCommentComponent from "../../container/CardComment";
import CardRecommentComponent from '../Card/CardRecomment'
function CardContentComponent(props) {
  const { data } = props;
  return (
    <div>
      <CardMediaComponent data={data} />
      <CardActionComponent />
      <CardCommentComponent data={data.comment}/>
      <CardRecommentComponent />
    </div>
  );
}

export default CardContentComponent;
