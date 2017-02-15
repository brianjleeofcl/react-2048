import React, { Component } from 'react';
import Board from './board-class'
import movements from './movement'
import Square from './Square'
import './Board.css'

const initialBoard = new Board(4)
initialBoard.array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

class GameBoard extends Component {
  constructor(prop) {
    super(prop)
    window.addEventListener('keydown', this.handleKey)
    this.state = {
      board: initialBoard
    }
    this.moveBoard = this.moveBoard.bind(this)
    this.handleKey = this.handleKey.bind(this)
  }

  moveBoard(str) {
    const newBoard = movements[str](this.state.board)

    this.setState({ board: newBoard })
  }

  handleKey = (event) => {
    if (event.which === 37) {
      this.moveBoard('left')
    }
    if (event.which === 38) {
      this.moveBoard('up')
    }
    if (event.which === 39) {
      this.moveBoard('right')
    }
    if (event.which === 40) {
      this.moveBoard('down')
    }
  }

  render() {
    return (
      <div className="Board">
        {this.state.board.matrix.map((arr, i) => <div className="Board-row" key={i}>
          {arr.map((num, j) => <Square key={j}>{num}</Square>)}
        </div>)}
      </div>
    );
  }
}

export default GameBoard;
