import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { select } from '../../ac'

class SelectFilter extends Component {
  state = {
    selected: null
  }

  handleChange = (selected) => {
    const { select } = this.props
    select(selected)
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
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    selected: state.selected
  }),
  { select }
)(SelectFilter)
