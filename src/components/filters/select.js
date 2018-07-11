import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticles } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selected) => {
    const payload = selected.map((option) => option.value)
    const { selectArticles } = this.props
    selectArticles(payload)
  }

  get options() {
    return this.props.articles.available.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  get value() {
    return this.props.articles.selected.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.value}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles
  }),
  { selectArticles }
)(SelectFilter)
