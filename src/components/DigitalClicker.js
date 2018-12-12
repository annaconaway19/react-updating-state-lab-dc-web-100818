// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    };
  }


  incrementClicker = () => {
    let increase = this.state.timesClicked + 1
    this.setState({
      timesClicked: increase
    })
  }

  render() {
    return(
      <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
