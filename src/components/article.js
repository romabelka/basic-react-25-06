import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import accordion from '../decorators/accordion'

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

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <div>
        <section ref={this.setSectionRef}>{article.text}</section>
        <button onClick={this.handleShowCommentsClick}>
          {article.id == this.props.openItemId
            ? 'Скрыть комментарии'
            : 'Показать комментарии'}
        </button>
        <CommentList
          articleId={article.id}
          comments={article.comments ? article.comments : []}
          isOpen={article.id == this.props.openItemId}
        />
      </div>
    )
  }

  setSectionRef = (ref) => (this.section = ref)

  componentDidUpdate() {
    console.log('---', this.section)
  }

  handleShowCommentsClick = () => {
    this.props.toggleOpenItem(this.props.article.id)
  }
}

export default accordion(Article)
