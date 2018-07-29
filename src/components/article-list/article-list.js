import React, { Component } from 'react'
import Article from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'

export class ArticleList extends Component {
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

ArticleList.propTypes = {
  fetchData: PropTypes.func,
  articles: PropTypes.array,
  toggleOpenItem: PropTypes.func,
  isOpen: PropTypes.bool
}

export default accordion(ArticleList)
