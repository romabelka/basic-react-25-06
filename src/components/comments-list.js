import React, { Component } from 'react'

class CommentsList extends Component {
    state = {
        visible: false
    }

    render() {
        return  (
            <div>
              <button onClick={() => this.setState({visible: !this.state.visible})}>
                {this.state.visible ? 'hide comments' : `show comments (${this.comments.length})`}
              </button>
              {this.state.visible && <ul>{this.comments}</ul>}
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

export default CommentsList
