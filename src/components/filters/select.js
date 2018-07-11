import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from "react-redux";
import { filterArticles } from '../../ac'

class SelectFilter extends Component {
  /*state = {
    selected: null
  }*/

  handleChange = (selected) => {
    const { filterArticles } = this.props
    filterArticles({names: selected})
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

export default connect((state) => ({
  articles: state.articles,
  selected: state.articlesFilter.names
}), { filterArticles })(SelectFilter)

