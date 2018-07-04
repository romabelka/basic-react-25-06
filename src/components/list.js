import React, { Component } from 'react'

class List extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    return this.props.items.map((item) => (
      <li key={this.props.getKey(item)}>{this.props.getItem(item)}</li>
    ))
  }
}

export default List
