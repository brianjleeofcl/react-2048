import React, { Component } from 'react';
import GameBoard from './board/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>2048</h1>
        </div>
        <GameBoard />
      </div>
    );
  }
}

export default App;
