import React, { Component } from 'react'
import Comment from './comment'
import List from './list'
import openClose from '../decorators/openClose'

class CommentList extends Component {
  render() {
    return (
      <List
        items={this.props.comments}
        getKey={this.getKey}
        getItem={this.getItem}
      />
    )
  }

  getKey = (comment) => {
    return comment.id
  }

  getItem = (comment) => {
    return <Comment comment={comment} />
  }
}

export default openClose(CommentList)
