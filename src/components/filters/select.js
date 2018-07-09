import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { setSelectOptions } from '../../ac'

class SelectFilter extends Component {
  render() {
    const { selectOptions, selectValue, setSelectOptions } = this.props

    return (
      <Select
        options={selectOptions}
        value={selectValue}
        onChange={setSelectOptions}
        isMulti
      />
    )
  }
}

export default connect(
  ({ filters: { selectOptions, selectValue } }) => ({
    selectOptions,
    selectValue
  }),
  { setSelectOptions }
)(SelectFilter)
