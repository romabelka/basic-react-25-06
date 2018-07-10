import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticle } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selected) => {
    const { from, to } = this.props.filters
    const { filterArticle } = this.props
    filterArticle(selected, from, to)
  }

  get options() {
    return this.props.filters.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { selected } = this.props.filters
    return (
      <Select
        options={this.options}
        value={selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  null,
  { filterArticle }
)(SelectFilter)
