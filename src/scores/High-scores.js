import React, {Component} from 'react'
import request from 'axios'
import Modal from '../modal/Modal'

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
      {this.state.scores.map(obj => <p>{obj.score}, {obj.user_name}</p>)}
    </Modal>
  }
}

export default HighScores
