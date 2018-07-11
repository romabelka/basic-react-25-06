import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticlesByName } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selectedValues) =>
    this.props.filterArticlesByName(selectedValues)

  get options() {
    return this.props.selectableArticles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selectedValues}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    selectableArticles: state.articles.initialArticles,
    selectedValues: state.select.selectedValues
  }),
  { filterArticlesByName }
)(SelectFilter)
