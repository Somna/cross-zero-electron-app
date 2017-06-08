/**
 * Created by lost on 28-May-17.
 */
import React, {Component} from 'react'
import Timer from './Timer'

export default class PlayerIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive
    }
  }
  render() {
    return (
      <div className="PlayerIndicator">
        {this.name}
      </div>
    )
  }
}