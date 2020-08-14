import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import cardArray from "./Components/images";

class App extends React.Component {
  state = {
    cards: cardArray,
    clickedCards: [],
    score: 0,
    highScore: 0,
    gameOver: false,
    won: false,
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

  checkIfClicked = id => {
    const clickedCards = [...this.state.clickedCards];
    return clickedCards.includes(id.toString());
  };

  addToClicked = e => {
    const { id } = e.target;
    const newClickedCards = [...this.state.clickedCards, id];
    this.setState({
      clickedCards: newClickedCards,
    });
  };

  incrementScore = () => {
    let score = this.state.score;
    score += 1;
    score > this.state.highScore
      ? this.setState({ score, highScore: score })
      : this.setState({ score });
    if (score === 12) {
      this.setState({ won: true });
      this.gameOver();
    }
  };

  resetGame = () => {
    this.setState({
      clickedCards: [],
      score: 0,
      gameOver: false,
    });
    setTimeout(() => {
      this.setState({ won: false });
    }, 600);
    this.shuffleArray(this.state.cards);
  };

  gameOver = () => {
    this.setState({ gameOver: true });
  };

  handleClick = (e, id) => {
    if (!this.checkIfClicked(id)) {
      this.addToClicked(e);
      this.incrementScore();
      this.shuffleArray(this.state.cards);
    } else {
      this.gameOver();
    }
  };

  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <Modal
          gameOver={this.state.gameOver}
          won={this.state.won}
          resetGame={this.resetGame}
        />
        <Header />
        <CardContainer
          cards={this.state.cards}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
