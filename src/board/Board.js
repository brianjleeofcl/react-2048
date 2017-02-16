import React, { Component } from 'react';
import { Link } from 'react-router'
import Board from './board-class'
import movements from './movement'
import checkMoves from './status'
import Square from './Square'
import Modal from '../modal/Modal'
import HighScores from '../scores/High-scores'
import './Board.css'

const initialBoard = new Board(4)
initialBoard.init()

class GameBoard extends Component {
  constructor(prop) {
    super(prop)
    window.addEventListener('keydown', this.handleKey)
    this.state = {
      board: initialBoard, status: true
    }
    this.moveBoard = this.moveBoard.bind(this)
    this.handleKey = this.handleKey.bind(this)
  }

  moveBoard(str) {
    const newBoard = movements[str](this.state.board)

    if (!newBoard.spaces) {
      const newStatus = checkMoves(this.state.board)

      this.setState({ status: newStatus })
    }

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
      <div className="Board-background">
        <Link to="/scores">High Scores</Link>
        <h3>{this.state.board.score}</h3>
        <div className="Board">
          {this.state.board.matrix.map((arr, i) => <div className="Board-row" key={i}>
            {arr.map((num, j) => <Square key={j}>{num}</Square>)}
          </div>)}
        </div>
        {!this.state.status
          ? <Modal>
            <h3>Game Over</h3>
            <p>Final Score: {this.state.board.score}</p>
          </Modal>
          : ''
        }
      </div>
    );
  }
}

export default GameBoard;
