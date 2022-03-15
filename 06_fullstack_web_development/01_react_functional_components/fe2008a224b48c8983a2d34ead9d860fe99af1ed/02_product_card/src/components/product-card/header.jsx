import React from "react";
// import zelda from "zelda";

const CardHeader = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.platforms.platform_logo.url} alt="Platforms Logos" />
    </div>
  );
};

export default CardHeader;
