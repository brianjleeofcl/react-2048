import React, {Component} from 'react'
import request from 'axios'
import Modal from '../modal/Modal'
import './High-scores.css'

class HighScores extends Component {
  constructor(props) {
    super(props)
    this.state = { scores: [] }
  }

  componentDidMount() {
    request.get('/api/scores/').then(({data}) => this.setState({scores:data}))
      .catch(err => console.error(err))
  }

  render() {
    return <Modal>
      <h2>High Scores</h2>
      <table className="High-scores-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Score</th>
            <th>Player</th>
          </tr>
        </thead>
        <tbody>
          {this.state.scores.map((obj, i) => <tr key={obj.id}>
            <td>#{i + 1}</td>
            <td>{obj.score}</td>
            <td>{obj.name}</td>
          </tr>)}
        </tbody>
      </table>
    </Modal>
  }
}

export default HighScores
