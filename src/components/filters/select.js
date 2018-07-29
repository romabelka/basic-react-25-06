import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { articleListSelector, filtersSelector } from '../../selectors'
import localized from '../../decorators/localized'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected) => {
    this.props.changeSelection(selected)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { local } = this.props
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        placeholder={local.filter.select.placeholder}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    selected: filtersSelector(state).selected,
    articles: articleListSelector(state)
  }),
  { changeSelection }
)(localized(SelectFilter))
