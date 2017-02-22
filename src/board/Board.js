import React from 'react';
import { Link } from 'react-router'
import Square from './Square'
import BlankSquare from './blank-square'
import Modal from '../modal/Modal'
import Button from '../button/button'
import './Board.css'

export default function GameBoard({board, status, resetBoard}) {
  return (
    <div className="Board-background">
      <Link to="/scores">High Scores</Link>
      <div>
        <Button>{board.score}</Button>
        <Button click={resetBoard}>Reset</Button>
      </div>
      <div className="Board">
        {board.matrix.map((arr, i) => <div className="Board-row" key={i}>
          {arr.map((num, j) => num
            ? <Square key={j}>{num}</Square>
            : <BlankSquare key={j}/>)}
        </div>)}
      </div>
      {!status
        ? <Modal>
          <h3>Game Over</h3>
          <p>Final Score: {board.score}</p>
          <Button click={resetBoard}>Reset</Button>
        </Modal>
        : ''
      }
    </div>
  );
}
