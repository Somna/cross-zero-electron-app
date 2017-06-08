/**
 * Created by lost on 28-May-17.
 */
import React, {Component} from 'react'
import CrossZeroTable from './CrossZeroTable'
import PlayerIndicator from './PlayerIndicator'
import Timer from './Timer'

export default class CrossZeroGame extends Component {
  constructor() {
    super();
    this.state = {
      player1: {
        isActive: false
      },
      player2: {
        isActive: false
      }
    }
  }
  render() {
    return (
      <div className="CrossZeroGame">
        <div className="PlayersIndicator">
          <div className="PlayerIndicator PlayerIndicator__left">
            <PlayerIndicator player={this.state.player1} />
          </div>
          <div className="PlayersIndicator PlayerIndicator__right">
            <PlayerIndicator player={this.state.player2} />
          </div>
        </div>
        <CrossZeroTable />
        <Timer />
      </div>
    )
  }
}