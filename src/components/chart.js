import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ArticlesChart extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

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
