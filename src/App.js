import React from "react";
import cardArray from "./cards.json";
import "./App.css";
import Nav from "./Components/Nav";
import CardContainer from "./Components/CardContainer";

class App extends React.Component {
  state = {
    cards: cardArray,
    clickedCards: [],
    score: 0,
    highScore: 0,
    gameOver: false,
  };

  addToClicked = e => {
    const { id } = e.target;
    const newClickedCards = [...this.state.clickedCards];
    newClickedCards.push(id);
    this.setState({
      clickedCards: newClickedCards,
    });
  };

  shuffleArray = arr => {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({
      cards: array,
    });
  };

  incrementScore = () => {
    let score = this.state.score;
    score += 1;
    score > this.state.highScore
      ? this.setState({ score, highScore: score })
      : this.setState({ score });
    score = 12 && this.setState({ gameOver: true });
  };

  checkIfClicked = id => {
    const clickedCards = [...this.state.clickedCards];
    return clickedCards.includes(id.toString());
  };

  resetGame = () => {
    this.setState({
      clickedCards: [],
      score: 0,
      gameOver: false,
    });
    this.shuffleArray(this.state.cards);
  };

  handleClick = (e, id) => {
    if (!this.checkIfClicked(id)) {
      this.addToClicked(e);
      this.incrementScore();
      this.shuffleArray(this.state.cards);
    } else {
      this.setState({ gameOver: true });
      this.resetGame();
    }
  };

  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <CardContainer
          cards={this.state.cards}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
