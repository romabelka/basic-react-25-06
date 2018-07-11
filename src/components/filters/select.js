import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filter } from '../../ac/index.js'

class SelectFilter extends Component {
  handleChange = (selected) => {
    const { filterParams, articles } = this.props
    // this.setState({ selected })
    // this.props.filter({...this.props.params, selected}, this.props.articles)
    this.props.filter({ ...filterParams, selected }, articles)
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
        value={this.props.filterParams.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  null,
  { filter }
)(SelectFilter)
