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
    speed: 200,
    derection: "RIGHT",
    sneakPart: [
      [0, 0],
      [2, 0],
    ],
  };

  componentDidMount() {
    setInterval(this.move, this.state.speed);
    document.onkeydown = this.onKeyDown
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({derection: "UP"});
        break;
      case 40:
        this.setState({derection: "DOWN"});
        break;
      case 37:
        this.setState({derection: "LEFT"});
        break;
      case 39:
        this.setState({derection: "RIGHT"});
        break;
    }
  }

  move = () => {
    let part = [...this.state.sneakPart];
    let head = part[part.length - 1];

    switch (this.state.derection) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
      break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
    }
    part.push(head);
    part.shift();
    this.setState({
      sneakPart: part,
    })
  }

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
