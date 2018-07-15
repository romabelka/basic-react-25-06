import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { articleListSelector, filtersSelector } from '../../selectors'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired
  }

  handleChange = (selected) => {
    this.props.changeSelection(selected)
  }

  get options() {
    const { articles } = this.props

    return Object.keys(articles).map((articleId) => ({
      label: articles[articleId].title,
      value: articleId
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    selected: filtersSelector(state).selected,
    articles: articleListSelector(state)
  }),
  { changeSelection }
)(SelectFilter)
