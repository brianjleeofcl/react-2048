import React, {Component} from 'react'

class Wrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    return <div>{
      React.cloneElement(this.props.children)
    }</div>
  }
}

export default Wrapper
