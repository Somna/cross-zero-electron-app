/**
 * Created by lost on 28-May-17.
 */
import React, {Component} from 'react'

export default class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: props.winner
    }
  }
  playerWin(player) {
    let winner = player || 'You';

    return <div>{winner} Win!</div>
  }
  playerLose() {
    return <div>You Lose!</div>
  }
  showMessage() {
    if (this.state.winner) {
      this.playerWin(this.state.winner)
    }
    else {
      this.playerLose()
    }
  }
  render() {
    return (
      <div className="GameOver">
        <h1>Game Over</h1>
        {this.showMessage()}
      </div>
    )
  }
}