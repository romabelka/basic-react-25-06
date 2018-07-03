import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    return <ul>{this.articles}</ul>
  }

  get articles() {
    return this.props.articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpenArticle={this.props.openArticleId === article.id}
          toggleOpenArticle={this.props.toggleOpenArticle}
          isOpenComments={this.props.openCommentsId === article.id}
          toggleOpenComments={this.props.toggleOpenComments}
        />
      </li>
    ))
  }
}

export default accordion(accordion(ArticleList, 'Article'), 'Comments')
