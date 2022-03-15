import React from "react";
// import zelda from "zelda";

const CardHeader = (props) => {
  console.log("CardHeader props : ", props);
  return (
    <div>
      <p>{props.productName}</p>
      {/* <img src={props.platformsLogos.platform_logo.url} alt="Platforms Logos" /> */}
      {props.platformsLogos.map((platform) => {
        // return <p key={platform.platform_logo.url}> url :{platform.platform_logo.url}</p>;
        return <img key={platform.platform_logo.url} src={platform.platform_logo.url} alt="Platforms Logo" />;
      })}
    </div>
  );
};

export default CardHeader;
