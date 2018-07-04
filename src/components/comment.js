import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    console.log('---', 'rerendering article')
    const comment = this.props.comment
    return (
      <div>
        <h3>{comment.user}</h3>
        {this.body}
      </div>
    )
  }

  get body() {
    const comment = this.props.comment
    return <section>{comment.text}</section>
  }

  componentDidUpdate() {
    console.log('---', this.section)
  }
}

export default Comment
