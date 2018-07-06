import React, { PureComponent } from 'react'
import CommentsList from './comments-list'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    let comments = article.comments ? (
      <CommentsList comments={article.comments} />
    ) : null

    return (
      <div>
        <h4>
          {article.title}
          <button
            onClick={this.handleClick}
            className={`btn btn-xs btn-default btn-info${
              isOpen ? ' active' : ''
            }`}
          >
            {isOpen ? 'close' : 'open'}
          </button>
        </h4>
        {this.body}
        {comments}
      </div>
    )
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return <section ref={this.setSectionRef}>{article.text}</section>
  }

  setSectionRef = (ref) => (this.section = ref)
}

export default Article
