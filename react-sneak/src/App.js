import React, { Component } from "react";
import Sneak from "./Sneak";
import Food from "./Food";

const getRandomFood = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y]
}

class App extends Component {
  state = {
    food: getRandomFood(),
    sneakPart: [
      [0, 0],
      [2, 0],
    ],
  };

  render() {
    return (
      <div className="game">
        <Sneak sneakPart={this.state.sneakPart} />
        <Food part={this.state.food} />
      </div>
    );
  }
}

export default App;
