/**
 * Created by lost on 27-May-17.
 */
import React, {Component} from 'react'
import _ from 'lodash'
import ZeroIcon from 'react-icons/lib/fa/circle-o'
import CrossIcon from "react-icons/lib/md/clear"
import './CrossZeroTable.css'

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: props.row || 0,
      cell: props.cell || 0,
      content: props.content || 0
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
    this.setState({content: 1})
  }
  render() {

    if (this.state.content === 1) {
      return (<td className="CrossZeroTable-cell"><CrossIcon/></td>);

    } else if (this.state.content === 2) {
      return (<td className="CrossZeroTable-cell"><ZeroIcon/></td>);
    }
    return (<td className="CrossZeroTable-cell" onClick={this.handleClick}></td>);
  }
}

class CrossZeroTable extends Component {
  constructor(props) {
    super()
    this.state = {
      area:
       [[0,0,0],
        [0,1,0],
        [0,0,2]]
    }
  }
  renderRow(rowNumber) {
    let items = [];
    _.each(this.state.area[rowNumber], (value, index) => {
        items.push(<Cell row={rowNumber} cell={index} content={value} />)
    });
    return items;
  }
  renderTable() {
    let rows = [];
    _.each(this.state.area, (row, index) => {
      rows.push(<tr>{this.renderRow(index)}</tr>)
    })
    return rows;
  }
  render() {
    return (
      <div className="CrossZeroTable">
        <table className="CrossZeroTable-table">
          {this.renderTable()}
        </table>
      </div>
    )
  }
}

export default CrossZeroTable;