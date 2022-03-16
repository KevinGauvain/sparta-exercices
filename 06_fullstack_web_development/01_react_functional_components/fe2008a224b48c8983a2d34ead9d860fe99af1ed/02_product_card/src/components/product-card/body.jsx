import React from "react";

const CardBody = (props) => {
  const [screenVisibility, setScreenVisibility] = React.useState(false);
  return (
    <div>
      <img src={props.cover} alt="Product cover" />
      <p>{props.firstReleaseDate}</p>
      <p>{props.genres}</p>
      <p>{props.summary}</p>
      <button onClick={() => setScreenVisibility(!screenVisibility) > { screenVisibility }}>Screen</button>
      {screenVisibility ? (
        <p>
          {props.screenshots.map((element, index) => (
            <img key={`${element.url}-${index}`} src={element.url} alt="Screenshots" />
          ))}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardBody;

// ----------Brouillon : bouton avec conditon----------------------------------------------

// const CardBody = (props) => {
//   const [screenVisibility, setScreenVisibility] = React.useState("no Screen");
//   if (screenVisibility === "no Screen") {
//     return (
//       <div>
//         <img src={props.product.cover.url} alt="Product cover" />
//         <p>{props.product.first_release_date}</p>
//         <p>{props.product.genres.map((element) => element.name)}</p>
//         <p>{props.product.summary}</p>
//         <button onClick={() => setScreenVisibility("screen")}>{screenVisibility}</button>
//         {/* <p>
//           {props.product.screenshots.map((element) => (
//             <img key={element.url} src={element.url} alt="Screenshots" />
//           ))}
//         </p> */}
//         <p>
//           <img key={props.product.screenshots[0].url} src={props.product.screenshots[0].url} alt="Screenshots" />
//         </p>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <img src={props.product.cover.url} alt="Product cover" />
//         <p>{props.product.first_release_date}</p>
//         <p>{props.product.genres.map((element) => element.name)}</p>
//         <p>{props.product.summary}</p>
//         <button onClick={() => setScreenVisibility("no Screen")}>{screenVisibility}</button>
//       </div>
//     );
//   }
// };
