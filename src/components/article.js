import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import demonstrator from '../decorators/demonstrator'

class Article extends PureComponent {
  setSectionRef = (ref) => (this.section = ref)

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
  // обработчик: если true , т.е. статья открыта, т.е. id текущей статьи = openItemId в декораторе - закрывает, т.е. передает в openItemId null
  handleClick = () => {
    const { isOpen } = this.props
    if (isOpen) {
      this.props.toggleOpen(null)
    } else {
      this.props.toggleOpen(this.props.article.id)
    }
  }

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <div>
        <section ref={this.setSectionRef}>{article.text}</section>
        <h4>Comments:</h4>
        <CommentList
          comments={article.comments}
          isShown={this.props.showItems}
          toggleShow={this.props.toggleShowItems}
        />
      </div>
    )
  }
}

export default demonstrator(Article)
