import React from "react";
// import zelda from "../data/zelda";

const CardBody = (props) => {
  const [screenVisibility, visibilityUpdate] = React.useState("no Screen");
  if (screenVisibility === "no Screen") {
    return (
      <div>
        <img src={props.cover.url} alt="Product cover" />
        <p>{props.first_release_date}</p>
        <p>{props.genres.map((element) => element.name)}</p>
        <p>{props.summary}</p>
        <button onClick={() => visibilityUpdate("screen")}>{screenVisibility}</button>
        <p>
          {props.screenshots.map((element) => (
            <img key={element.url} src={element.url} alt="Screenshots" />
          ))}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <img src={props.cover.url} alt="Product cover" />
        <p>{props.first_release_date}</p>
        <p>{props.genres.map((element) => element.name)}</p>
        <p>{props.summary}</p>
        <button onClick={() => visibilityUpdate("no Screen")}>{screenVisibility}</button>
      </div>
    );
  }
};

export default CardBody;
