import React from "react";
import "./styles.css";
import Backdrop from "../Backdrop/";

const Modal = props => {
  let classes = [];
  props.gameOver
    ? (classes = ["Modal", "Open"])
    : (classes = ["Modal", "Close"]);
  return (
    <>
      <Backdrop gameOver={props.gameOver} />
      <div className={classes.join(" ")}>
        {props.won ? (
          <h1 style={{ color: "green" }}>YOU WON!</h1>
        ) : (
          <h1 style={{ color: "red" }}>YOU LOST!</h1>
        )}
        <button onClick={props.resetGame}>Play Again</button>
      </div>
    </>
  );
};

export default Modal;
