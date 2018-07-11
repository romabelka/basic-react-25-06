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
    const { articles } = this.props
    return articles
      .filter(this.filterByName)
      .filter(this.filterByDates)
      .map((article) => (
        <li key={article.id} className="test--article-list__item">
          <Article
            article={article}
            isOpen={this.props.openItemId === article.id}
            toggleOpen={this.props.toggleOpenItem}
          />
        </li>
    ))
  }

  get filterByName () {
    const { filter } = this.props

    return (article) =>
      filter.names.length
        ? filter.names.map(n => n.label).indexOf(article.title) >= 0
        : true;
  }

  get filterByDates () {
    const { filter } = this.props
    const { from, to } = filter.dates
    const fromDate = from ? new Date(from) : null;
    const toDate = from ? new Date(to) : null;

    return (article) => {
      let date = new Date(article.date)
      return (!fromDate || fromDate <= date) && (!toDate || toDate >= date)
    }
  }

}

export default connect((state) => ({
  articles: state.articles,
  filter: state.articlesFilter
}))(accordion(ArticleList))
