import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import Loader from './common/loader'
import accordion from '../decorators/accordion'
import {
  filtratedArticlesSelector,
  articlesLoadingSelector,
  articlesLoadedSelector
} from '../selectors'
import { loadAllArticles } from '../ac'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchData && !this.props.loaded && this.props.fetchData()
  }

  render() {
    if (this.props.loading) return <Loader />
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

export default connect(
  (state) => ({
    articles: filtratedArticlesSelector(state),
    loading: articlesLoadingSelector(state),
    loaded: articlesLoadedSelector(state)
  }),
  { fetchData: loadAllArticles }
)(accordion(ArticleList))
