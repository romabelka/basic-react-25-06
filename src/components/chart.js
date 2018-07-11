import React, { Component } from 'react'

export default class ArticlesChart extends Component {
  render() {
    return <div ref={this.setContainerRef} />
  }

  setContainerRef = (ref) => {
    this.container = ref
    //do some charting with D3
  }

  componentDidUpdate() {
    //update your charts
  }
}
