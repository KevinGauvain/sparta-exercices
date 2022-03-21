import React from "react";

type TimerProps = {
  timerId: string;
  removeTimer: (createdAt: string) => void;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  return (
    <div>
      <li className="list-group-item d-flex align-items-center  justify-content-between">
        <p className="text-center">X seconds</p>
        <div className="btn btn-danger">Delete</div>
      </li>
    </div>
  );
};
