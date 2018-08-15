import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelect } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selected) => {
    console.log('selected', selected)
    this.props.changeSelect(selected)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
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

const dispatch = {
  changeSelect
}

export default connect(
  (state) => ({
    articles: state.articles,
    filtersReducer: state.filtersReducer
  }),
  dispatch
)(SelectFilter)
