import React, {Component} from 'react'
import request from 'axios'
import Board from './board-class'
import movements from './movement'
import checkMoves from './status'

class Wrapper extends Component {
  constructor(props) {
    super(props)
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
    this.resetBoard = this.resetBoard.bind(this)
  }

  handleKey(event) {
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

    if (!id) {
      return this.getGameId()
    }
    request.patch('/api/scores/game', {id, score}).then(({data}) => console.log(data))
  }

  getGameId() {
    const userId = this.state.userId
    const score = this.state.board.score

    request.post('/api/scores/game', { userId, score }).then(({data}) => {
      this.setState({ gameId: data.id })
    })
  }

  handleData(data) {
    const { userId, logged, name } = data

    this.setState({ userId })
  }

  resetBoard() {
    const initialBoard = new Board(4)
    initialBoard.init()
    this.setState({
      board: initialBoard,
      status: true,
      userId: null,
      gameId: null
    })
  }

  render() {
    const {board, status} = this.state
    const resetBoard = this.resetBoard
    return React.cloneElement(this.props.children, {board, status, resetBoard})
  }

  componentDidMount() {
    request.get('/api/users/').then(({data}) => this.handleData(data))
  }
}

export default Wrapper
