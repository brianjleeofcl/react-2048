import React, { Component } from 'react';
import { Link } from 'react-router'
import request from 'axios'
import Board from './board-class'
import movements from './movement'
import checkMoves from './status'
import Square from './Square'
import Modal from '../modal/Modal'
import './Board.css'


class GameBoard extends Component {
  constructor(prop) {
    super(prop)
    window.addEventListener('keydown', this.handleKey.bind(this))

    const initialBoard = new Board(4)
    initialBoard.init()

    this.state = {
      board: initialBoard, status: true, userId: null, gameId: null
    }
    this.moveBoard = this.moveBoard.bind(this)
    this.handleData = this.handleData.bind(this)
    this.getGameId = this.getGameId.bind(this)
    this.sendScore = this.sendScore.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
  }

  handleKey(event) {
    console.log(event.timeStamp);
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

  moveBoard(str) {
    const newBoard = movements[str](this.state.board)

    if (!newBoard.spaces) {
      const newStatus = checkMoves(this.state.board)

      this.setState({ status: newStatus })
    }

    this.setState({ board: newBoard })
    this.sendScore()
  }

  sendScore() {
    const id = this.state.gameId
    const score = this.state.board.score
    console.log(id);

    if (!id) {
      return this.getGameId()
    }
    request.patch('/api/scores/game', {id, score}).then(({data}) => console.log(data))
  }

  getGameId() {
    const userId = this.state.userId
    const score = this.state.board.score

    request.post('/api/scores/game', { userId, score }).then(({data}) => {
      console.log(data);
      this.setState({ gameId: data.id })
    })
  }

  handleData(data) {
    const { userId, logged, name } = data

    this.setState({ userId })
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

  componentDidMount() {
    request.get('/api/users/').then(({data}) => this.handleData(data))
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey.bind(this))
    this.setState({ board: '' })
    console.log('unmount called?');
  }
}

export default GameBoard;
