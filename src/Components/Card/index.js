import React from "react";
import "./styles.css";

const Card = props => {
  return (
    <img
      src={props.image}
      alt={`memory-card-${props.id}`}
      id={props.id}
      onClick={e => props.handleClick(e, props.id)}
    />
  );
};

export default Card;
