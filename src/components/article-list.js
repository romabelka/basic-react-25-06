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
    console.log('---', 'rerendering article list')
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
  const { dateRange, selected, articles } = state
  const { from, to } = dateRange
  let filteredArticles = articles.slice(0)
  if (selected) {
    filteredArticles = filteredArticles.filter((article) =>
      selected.map((s) => s.value).includes(article.id)
    )
  }
  if (from && to) {
    filteredArticles = filteredArticles.filter((article) => {
      const articleDate = new Date(article.date).getTime()
      return articleDate >= from.getTime() && articleDate <= to.getTime()
    })
  }
  return {
    articles: filteredArticles
  }
})(accordion(ArticleList))
