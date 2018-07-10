import React, { Component } from 'react'
import Select from 'react-select'

class SelectFilter extends Component {
  handleChange = (selected) => {
    this.props.changeFilters({
      selectedArticles: selected
    })
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.filters.selectedArticles}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default SelectFilter
