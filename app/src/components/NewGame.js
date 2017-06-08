/**
 * Created by lost on 27-May-17.
 */
import React, {Component} from 'react'

class NewGame extends Component {
  render() {
    return (
      <div>
        <button disabled>Single</button>
        <button>two players</button>
        <button disabled>network game</button>
      </div>
    )
  }
}

export default NewGame;