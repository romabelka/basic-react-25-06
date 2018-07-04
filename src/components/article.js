import React, { PureComponent } from 'react'
import Comments from '../components/comments'
import accordion from '../decorators/accordion'

class Article extends PureComponent {
  handleClickToggleArticle = () => this.props.toggleOpen(this.props.article.id)

  handleClickToggleComments = () => this.props.toggleOpenItem(true)

  setSectionRef = (ref) => (this.section = ref)

  get body() {
    const { article } = this.props
    return <section ref={this.setSectionRef}>{article.text}</section>
  }

  render() {
    const { article, isOpen, openItem } = this.props
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.handleClickToggleArticle}>
            {isOpen ? 'close' : 'open'}
          </button>
        </h3>
        {isOpen && this.body}
        {article.comments &&
          isOpen && (
            <button onClick={this.handleClickToggleComments}>
              {openItem ? 'close' : 'open'}
            </button>
          )}
        {isOpen && openItem && <Comments comments={article.comments} />}
      </div>
    )
  }
}

export default accordion(Article)
