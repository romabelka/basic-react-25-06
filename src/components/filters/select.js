import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { selectFilterArticle } from './../../ac'
import fixtures from './../../fixtures.js'

class SelectFilter extends Component {
  state = {
    selected: this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  handleChange = (selected) => {
    this.setState({ selected }, function() {
      this.props.selectFilterArticle(selected)
    })
  }

  get options() {
    return fixtures.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  componentWillReceiveProps(nextProps) {
    // при удалении статьи меняем выбранный масив
    this.setState({
      selected: nextProps.articles.map((article) => ({
        label: article.title,
        value: article.id
      }))
    })
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.selected}
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
  {
    selectFilterArticle
  }
)(SelectFilter)
