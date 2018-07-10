import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { setSelectValue } from '../../ac'

class SelectFilter extends Component {
  render() {
    const { articles, selectValue, setSelectValue } = this.props
    const options = articles.map(({ title, id }) => ({
      label: title,
      value: id
    }))

    return (
      <Select
        options={options}
        value={selectValue}
        onChange={setSelectValue}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    selectValue: state.filters.selectValue,
    articles: state.articles
  }),
  { setSelectValue }
)(SelectFilter)
