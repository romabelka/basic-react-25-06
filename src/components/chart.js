import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ArticlesChart extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string,
        text: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
          })
        )
      })
    ).isRequired
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
