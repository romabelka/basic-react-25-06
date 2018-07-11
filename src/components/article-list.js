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

  filterArticle(article) {
    const name = article.title
    const dateArticle = new Date(article.date)
    const { selected, date } = this.props.filters
    const dateFrom = new Date(date.from)
    const dateTo = new Date(date.to)
    let filterResult = {}
    if (date.from != null && date.to != null) {
      if (
        dateArticle.getTime() <= dateTo.getTime() &&
        dateArticle.getTime() >= dateFrom.getTime()
      )
        filterResult.dateCheck = true
      else filterResult.dateCheck = false
    } else {
      filterResult.dateCheck = true
    }

    if (selected.length > 0) {
      selected.forEach((el, ind) => {
        if (el.label === name) {
          filterResult.selectCheck = true
          return
        }
      })
      // filterResult.selectCheck = false
    } else filterResult.selectCheck = true

    return filterResult.selectCheck && filterResult.dateCheck ? true : false
  }

  get articles() {
    const articlesFilter = this.props.articles.filter((article) =>
      this.filterArticle(article)
    )
    return articlesFilter.map((article) => {
      return (
        <li key={article.id} className="test--article-list__item">
          <Article
            article={article}
            isOpen={this.props.openItemId === article.id}
            toggleOpen={this.props.toggleOpenItem}
          />
        </li>
      )
    })
  }
}

export default connect((state) => ({
  articles: state.articles,
  filters: state.filters
}))(accordion(ArticleList))
