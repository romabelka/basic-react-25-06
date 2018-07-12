import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }

  render() {
    return <ul>{this.articles}</ul>
  }

  get articles() {
    return this.props.articles.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={this.props.openItemId === article.id}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }
}

export default connect((state) => {
  const {
    selected,
    dateRange: { from, to }
  } = state.filters

  const filtratedArticles = state.articles.filter((article) => {
    const published = Date.parse(article.date)
    return (
      (!selected.length ||
        selected.find((selected) => selected.value === article.id)) &&
      (!from || !to || (published > from && published < to))
    )
  })
  return {
    articles: filtratedArticles
  }
})(accordion(ArticleList))
