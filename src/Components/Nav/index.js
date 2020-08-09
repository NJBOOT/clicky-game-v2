import React from "react";
import "./styles.css";

const Nav = props => {
  return (
    <nav className="Nav">
      <p>The Memory Game!</p>
      <ul>
        <li>Score: {props.score}</li>
        <li>High Score: {props.highScore}</li>
      </ul>
    </nav>
  );
};

export default Nav;
