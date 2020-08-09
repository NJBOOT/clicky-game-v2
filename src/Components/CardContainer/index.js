import React from "react";
import "./styles.css";
import Card from "../Card";

const CardContainer = props => {
  return (
    <div className="CardContainer">
      {props.cards.map(card => {
        return (
          <Card
            key={`card-${card.id}`}
            id={card.id}
            image={card.image}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
