import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [text, setText] = React.useState("Hide");
  // const text1 = <p>Hello you !</p>;
  if (text === "Hide") {
    return (
      <div>
        <button onClick={() => setText("Show")}>{text}</button>
        <p>Hello you !</p>
      </div>
    );
  } else {
    return <button onClick={() => setText("Hide")}>{text}</button>;
  }
};
