import React, { PureComponent } from 'react'
import ArticleCommentsList from './article-comments-list'

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
        {this.comments}
      </div>
    )
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return <section ref={this.setSectionRef}>{article.text}</section>
  }

  get comments() {
    const { comments } = this.props.article

    if (!comments) return null
    return <ArticleCommentsList comments={comments} />
  }

  setSectionRef = (ref) => (this.section = ref)

  componentDidUpdate() {
    console.log('---', this.section)
  }
}

export default Article
