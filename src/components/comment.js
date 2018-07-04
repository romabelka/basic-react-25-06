import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        <h3>{comment.user}</h3>
        {this.body}
      </div>
    )
  }

  handleClick = () => this.props.toggleOpen(this.props.comment.id)

  get body() {
    const { comment } = this.props

    return <section ref={this.setSectionRef}>{comment.text}</section>
  }

  setSectionRef = (ref) => (this.section = ref)
}

export default Comment
