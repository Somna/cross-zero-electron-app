import React, {Component} from 'react'

import ZeroIcon from 'react-icons/lib/fa/circle-o'
import CrossIcon from "react-icons/lib/md/clear"

export default class SelectColor extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="SelectColor">
        <p className="divider">
          - or -
        </p>
        <div>
          <button><ZeroIcon/></button>
          <button><CrossIcon/></button>
        </div>
      </div>
    )
  }
}