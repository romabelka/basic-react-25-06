import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'
import CommentList from './comment-list'

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
        <CommentList
          articleIsOpen={this.props.openItemId === article.id}
          comments={article.comments}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)
