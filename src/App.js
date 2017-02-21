import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import GameBoard from './board/Board';
import HighScores from './scores/High-scores';
import Wrapper from './board/Wrapper'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>2048</h1>
        </div>
        <Router history={browserHistory}>
          <Route path="/" component={Wrapper}>
            <IndexRoute component={GameBoard} />
            <Route path="/scores" component={HighScores} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
