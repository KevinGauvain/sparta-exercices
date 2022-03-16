import React from "react";

const CardFooter = (props) => {
  // console.log("CardFooter : ", props);
  return (
    <div>
      <a href={"games/" + props.slug}>Link SLug</a>
    </div>
  );
};

export default CardFooter;
