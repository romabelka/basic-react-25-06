import React, { PureComponent } from 'react'
import Opener from '../decorators/opener.jsx'
import CommentList from './CommentList.jsx'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    return (
      <div style={{ width: '80%' }}>
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
    this.props.toggleOpen(this.props.article.id)
    if (this.props.ifShown) this.showComments() // закрыть комментарии если закрываем статью
  }

  showComments = () => {
    this.props.showComments()
  }

  get body() {
    const { isOpen, article, ifShown } = this.props
    if (!isOpen) return null

    return (
      <section ref={this.setSectionRef}>
        {article.text}
        <br />
        <button onClick={this.showComments}>Показать комментарии</button>
        {ifShown ? <CommentList comments={article.comments} /> : null}
      </section>
    )
  }

  setSectionRef = (ref) => (this.section = ref)
}

export default Opener(Article)
