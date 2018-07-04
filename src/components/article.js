import React, { PureComponent } from 'react'

class Article extends PureComponent {
  state = {
    commentsIsOpen: false
  }

  render() {
    console.log('---', 'rerendering article')
    const { article, isOpen } = this.props
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.handleClick}>
            {isOpen ? 'close' : 'open'}
          </button>
        </h3>
        {this.body}
      </div>
    )
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <section ref={this.setSectionRef}>
        {article.text}
        {this.comments}
      </section>
    )
  }

  get comments() {
    const { article } = this.props
    if (!article.comments) return null
    return (
      <section>
        <button onClick={this.toggleComments}>
          {this.state.commentsIsOpen ? 'Скрыть' : 'Показать'} комменты
        </button>
        {this.state.commentsIsOpen && <ul>{this.comment}</ul>}
      </section>
    )
  }

  get comment() {
    const { article } = this.props

    return article.comments.map((comment) => (
      <li key={comment.id}>
        <strong>{comment.user}: </strong>
        {comment.text}
      </li>
    ))
  }

  toggleComments = () =>
    this.setState({ commentsIsOpen: !this.state.commentsIsOpen })

  setSectionRef = (ref) => (this.section = ref)

  componentDidUpdate() {
    console.log('---', this.section)
  }
}

export default Article
