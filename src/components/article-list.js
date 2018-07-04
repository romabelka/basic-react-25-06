import React, { Component } from 'react'
import Article from './article'
import CommentList from './comment-list'
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
          isOpen={this.props.openItemId === article.id}
          toggleOpen={this.props.toggleOpenItem}
        />
        <CommentList comments={article.comments} />
      </li>
    ))
  }
}

export default accordion(ArticleList)
