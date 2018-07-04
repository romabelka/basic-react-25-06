import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import closelist from '../decorators/close-list'

class Article extends PureComponent {
  render() {
    console.log('---', 'rerendering article')
    const { article, isOpen } = this.props
    const isCommentsOpen = this.props.isCommentsOpen
    const comments = this.props.article.comments
    let button = null
    if (comments) {
      button = (
        <button onClick={this.commentClick}>
          {isCommentsOpen ? 'close' : 'open'}
        </button>
      )
    }
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.handleClick}>
            {isOpen ? 'close' : 'open'}
          </button>
          {button}
        </h3>
        {this.body}
        {this.comments}
      </div>
    )
  }

  handleClick = () => {
    const { isOpen, article } = this.props
    if (!isOpen) {
      this.props.toggleOpen(this.props.article.id)
    } else {
      this.props.toggleOpen(null)
    }
  }

  commentClick = () => {
    this.props.toggleOpenComments(this.props.isCommentsOpen)
  }

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    return <section ref={this.setSectionRef}>{article.text}</section>
  }

  get comments() {
    const { isCommentsOpen, article } = this.props
    if (!isCommentsOpen) return null
    const comments = this.props.article.comments
    return <CommentList comments={comments} />
  }

  setSectionRef = (ref) => (this.section = ref)

  componentDidUpdate() {
    console.log('---', this.section)
  }
}

export default closelist(Article)
