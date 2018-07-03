import React, { PureComponent } from 'react'

class ArticleComment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        <h4>{comment.user}:</h4>
        {comment.text}
      </div>
    )
  }
}

export default ArticleComment
