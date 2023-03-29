import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const Counter = (props) => {
  const { numb, increment, decrement, restart } = props;
  return (
    <div>
      <div className="cont-act">
        <FontAwesomeIcon icon={faHeart} beat style={{ fontSize: 30 + "px" }} />
        <h2>{numb}</h2>
      </div>
      <div className="btn-control">
        <button onClick={restart}>
          <FontAwesomeIcon icon={faArrowRotateRight} fade />
        </button>
        <button onClick={increment}>
          <FontAwesomeIcon icon={faPlus} fade />{" "}
        </button>
        <button onClick={decrement}>
          <FontAwesomeIcon icon={faMinus} fade />
        </button>
      </div>
    </div>
  );
};
export default Counter;
