/**
 * Created by lost on 27-May-17.
 */
import React, {Component} from 'react'
import Auth from './Auth'
import NewGame from './NewGame'
import SelectColor from './SelectColor'
import RouletteFirstTurn from './RouletteFirstTurn'
import CrossZeroGame from './CrossZeroGame'
import GameOver from './GameOver'
import ScoreBoard from './ScoreBoard'

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLayout: 'game',
      winner: false,
      isLoggedIn: true,

    }

  }

  render() {
    // todo: refactor the select layout on the factory
    if (this.state.isLoggedIn) {
      if (this.state.currentLayout === 'new-game') {
        return <NewGame/>
      } else if (this.state.currentLayout === 'select-color') {
        return <SelectColor/>
      } else if (this.state.currentLayout === 'roulette-fist-turn') {
        return <RouletteFirstTurn/>
      } else if (this.state.currentLayout === 'game') {
        return <CrossZeroGame/>
      } else if (this.state.currentLayout === 'game-over') {
        return <GameOver winner={this.state.winner} />
      } else if (this.state.currentLayout === 'score-board') {
        return <ScoreBoard/>
      }
    } else {
      return <Auth/>
    }
  }
}

export default Game;