import React, { useState } from "react";
import { Timer } from "./Timer";

const TimersList: React.FC = () => {
  // const [timer, setTimer] = useState();

  // function newTimer(value: any): any {
  //   const timerAlreadyCreate = [];
  //   let counter = 0;
  //   timerAlreadyCreate.push(value + counter);
  //   counter += 1;
  //   return setTimer(value);
  // }
  return (
    <div>
      <p>TIMERS LIST</p>
      <ul className="list-group timers-list">
        <li className="list-group-item text-center">
          <button className="btn btn-primary">Add a timer</button>
        </li>
        <li className="list-group-item d-flex align-items-center  justify-content-between">
          <p className="text-center">X seconds</p>
          <div className="btn btn-danger">Delete</div>
        </li>
      </ul>
    </div>
  );
};

export default TimersList;

// <div>
// <p>TIMERS LIST</p>
// <ul className="list-group timers-list">
//   <li className="list-group-item text-center">
//     <button className="btn btn-primary">Add a timer</button>
//   </li>
//   <li className="list-group-item d-flex align-items-center  justify-content-between">
//     <p className="text-center">X seconds</p>
//     <div className="btn btn-danger">Delete</div>
//   </li>
// </ul>
// </div>
// );
// };
