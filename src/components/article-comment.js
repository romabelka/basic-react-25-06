import React, { Component } from 'react'

class ArticleComment extends Component {
  render() {
    const { comment } = this.props
    return (
      //тут я не совсем поняла, нужно ли дублировать в самом li key
      // он ведь у меня уже есть в ArticleComment который вызываю в Article
      <li key={comment.id}>
        <p>
          {comment.text} <strong>{comment.user}</strong>
        </p>
      </li>
    )
  }
}

export default ArticleComment
