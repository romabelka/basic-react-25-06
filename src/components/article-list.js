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
    const { articles, openItemId, toggleOpenItem } = this.props

    return articles.map((article) => {
      if (!this.isArticleInFilter(article)) {
        return null
      }

      return (
        <li key={article.id} className="test--article-list__item">
          <Article
            article={article}
            isOpen={openItemId === article.id}
            toggleOpen={toggleOpenItem}
          />
        </li>
      )
    })
  }

  /**
   * Проверяет, подходит ли статья под фильтр
   * @param {object} article - статья.
   * @returns {boolean}
   */
  isArticleInFilter = (article) => {
    const { selectValue, dateRange } = this.props
    const dateArticle = Date.parse(article.date)
    const dateFrom = Date.parse(dateRange.from)
    const dateTo = Date.parse(dateRange.to)
    const selectedIds = selectValue.map(({ value }) => value)

    return (
      (dateArticle >= dateFrom && dateArticle <= dateTo) ||
      selectedIds.includes(article.id)
    )
  }
}

export default connect((state) => ({
  articles: state.articles,
  selectValue: state.filters.selectValue,
  dateRange: state.filters.dateRange
}))(accordion(ArticleList))
