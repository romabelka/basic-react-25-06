import React, { Component } from 'react'
import collapsible from '../decorators/collapsible'

class CommentsList extends Component {
    render() {
        const {expanded, toggleCollapsibility} = this.props
        return  (
            <div>
              <button onClick={toggleCollapsibility}>
                {expanded ? 'hide comments' : `show comments (${this.comments.length})`}
              </button>
              {expanded && <ul>{this.comments}</ul>}
            </div>
        )
    }

    get comments() {
        return this.props.comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>by {comment.user}</div>
          </li>
        ))
    }
}

export default collapsible(CommentsList)
