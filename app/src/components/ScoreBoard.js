/**
 * Created by lost on 28-May-17.
 */
import React, {Component} from 'react'
import _ from  'lodash'

export default class ScoreBoard extends Component {
  constructor() {
    super();
    this.state = {}
  }
  renderList() {
    let scores = [
      {
        name: 'Alex',
        score: 10000
      },
      {
        name: 'Max',
        score: 9233
      },
      {
        name: 'Jonh',
        score: 8503
      },
      {
        name: 'Adolf',
        score: 5664
      }
    ]
    let items = []
    // todo: list
    _.each(scores, (player) => {
      items.push(<li>{player.name} - {player.score}</li>)
    })
    return (items)
  }
  render() {
    return (
      <div className="ScoreBoard">
        <ol>
          {this.renderList()}
        </ol>
      </div>
    )
  }
}