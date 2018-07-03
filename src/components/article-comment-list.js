import React, { Component } from 'react'
import ArticleComment from './article-comment'
import spoiler from '../decorators/spoiler'

class ArticleCommentList extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.props.isOpen ? 'hide' : 'show'}
        </button>
        <ul>{this.articleComments}</ul>
      </div>
    )
  }

  get articleComments() {
    if (!this.props.articleComments || !this.props.isOpen) return null
    return this.props.articleComments.map((comment) => (
      <li key={comment.id}>
        <ArticleComment comment={comment} />
      </li>
    ))
  }

  handleClick = () => this.props.toggleList(!this.props.isOpen)
}

export default spoiler(ArticleCommentList)
