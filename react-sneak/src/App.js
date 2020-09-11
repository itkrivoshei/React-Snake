import React from 'react';
import Sneak from "./Sneak"

function App() {
  state = {
    sneakPart: [
      [0,0],
      [2,0]
    ]
  }

  return (
    <div className="game">
      <Sneak sneakPart={this.state.sneakPart}/>    
    </div>
  );
}

export default App;
