import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    filters: PropTypes.shape({
      dates: PropTypes.object,
      selected: PropTypes.array
    }),
    articleList: PropTypes.any,
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
    let selected
    if (!this.props.filters) {
      selected = this.props.articles
    } else {
      selected = this.filterArticle(
        this.props.articles,
        this.props.filters.selected
      )
      selected = this.filterDates(selected, this.props.filters.dates)
    }
    return selected.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={this.props.openItemId === article.id}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }

  filterDates = (array, filters) => {
    let fromDate, toDate
    if (filters.from) {
      fromDate = new Date(filters.from)
    }
    if (filters.to) {
      toDate = new Date(filters.to)
    }

    if (!toDate || !fromDate) {
      return array
    }

    const filtered = array.filter((item) => {
      const date = new Date(item.date)
      if (fromDate && toDate) {
        return date - fromDate > 0 && toDate - date > 0
      } else if (fromDate) {
        return date - fromDate > 0
      } else {
        return toDate - date > 0
      }
    })
    return filtered
  }

  filterArticle = (array, filters) => {
    let selected

    if (!filters.length) {
      selected = array
    } else {
      selected = array.filter((article) => {
        return filters.some((item) => {
          return item.value === article.id
        })
      })
    }
    return selected
  }
}

export default connect((state) => ({
  articles: state.articles,
  filters: state.filtersReducer
}))(accordion(ArticleList))
