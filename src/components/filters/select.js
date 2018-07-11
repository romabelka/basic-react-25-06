import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectFilterArticle, dateFilterArticle } from './../../ac'

class SelectFilter extends Component {
  state = {
    selected: this.options
  }

  handleChange = (selected) => {
    this.setState({ selected }, function() {
      this.props.selectFilterArticle(selected)
      this.props.dateFilterArticle({
        from: null,
        to: null
      })
    })
  }

  get options() {
    return this.props.articles.origin.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.articles.filtred.map((article) => ({
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
    selectFilterArticle,
    dateFilterArticle
  }
)(SelectFilter)
