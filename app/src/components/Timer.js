/**
 * Created by lost on 28-May-17.
 */
import React, {Component} from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    let startTime = Date.now()
    this.state = {
      startTime: startTime,
      currentTime: Date.now() - startTime
    }
    this.tick = this.tick.bind(this);
    setInterval(this.tick, 1000)
  }
  tick() {
    this.setState({currentTime: Date.now() - this.state.startTime})
  }
  getFormattedTime() {
    let currentTime = new Date(this.state.currentTime);
    return (currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()) + ':' + (currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds())
  }
  render() {
    return (
      <div className="Timer">
        <span>{this.getFormattedTime()}</span>
      </div>
    )
  }
}