import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { setFilters } from '../../ac'
import articles from '../../fixtures'

class SelectFilter extends Component {
  handleChange = (selected) => {
    const { setFilters, filters } = this.props

    setFilters(Object.assign(filters, { selected }))
  }

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.filters.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

const mapStateToProps = (state) => ({
  options: state.articles,
  filters: state.filters
})

export default connect(
  mapStateToProps,
  { setFilters }
)(SelectFilter)
