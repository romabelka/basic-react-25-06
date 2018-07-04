import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
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

  handleClick = () => {
    console.log('---', 'clicked')
    this.props.toggleOpen(this.props.article.id)
  }

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <section ref={this.setSectionRef}>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  setSectionRef = (ref) => (this.section = ref)

  componentDidUpdate() {
    console.log('---', this.section)
  }
}

export default Article
