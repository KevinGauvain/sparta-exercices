import React from "react";

const CardHeader = (props) => {
  // console.log("CardHeader props : ", props.name);
  return (
    <div>
      <p>{props.name}</p>
      {/* <img src={props.platformsLogos.platform_logo.url} alt="Platforms Logos" /> */}
      {props.platformLogos.map((platformUrl) => {
        // return <p key={platform.platform_logo.url}> url :{platform.platform_logo.url}</p>;
        return <img key={platformUrl} src={platformUrl} alt="Platform Logos" />;
      })}
    </div>
  );
};

export default CardHeader;
