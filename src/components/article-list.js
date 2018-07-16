import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'
import { filtratedArticlesSelector } from '../selectors'

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
    console.log('---', 'rendering article list')
    return <ul>{this.articles}</ul>
  }

  get articles() {
    return this.props.articles.map((id) => (
      <li key={id} className="test--article-list__item">
        <Article
          id={id}
          isOpen={this.props.openItemId === id}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }
}

export default connect((state) => {
  console.log('---', 'article-list connect')
  return {
    articles: filtratedArticlesSelector(state)
  }
})(accordion(ArticleList))
