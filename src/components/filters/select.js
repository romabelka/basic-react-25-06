import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelectedArticles } from '../../ac'

class SelectFilter extends Component {
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
        onChange={this.props.choseSelect}
        isMulti
      />
    )
  }
}

const mapStateToProps = (state) => ({
  selected: state.filters.selected,
  articles: state.articles
})

const mapDispatchToProps = (dispatch) => ({
  choseSelect: (selected) => dispatch(changeSelectedArticles(selected))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
