import React from "react";
import "./styles.css";

const Backdrop = props => {
  return props.gameOver ? <div className="Backdrop"></div> : null;
};

export default Backdrop;
