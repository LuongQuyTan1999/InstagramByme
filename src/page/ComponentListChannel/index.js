import React from "react";
import ListChannel from "../../Components/ListChannel";
const ComponentListChannel = props => {
  return (
    <>
      <ListChannel titleUpload="Video tải lên" titleConvention="Video tải lên phải có thời lượng từ 1 phút đến 60 phút" isButton={true}/>
    </>
  );
};
export default ComponentListChannel;
