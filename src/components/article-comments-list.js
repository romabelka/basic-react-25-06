import React, { Component } from 'react'
import ArticleComment from './article-comment'
import collapsibleList from '../decorators/collapsible-list'

class ArticleCommentsList extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggleList}>
          {this.props.openList ? 'Hide' : 'Show'} comments
        </button>
        {this.props.openList && <ul>{this.comments}</ul>}
      </div>
    )
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <ArticleComment comment={comment} key={comment.id} />
    ))
  }
}

export default collapsibleList(ArticleCommentsList)
