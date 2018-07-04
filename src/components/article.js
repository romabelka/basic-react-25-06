import React, { PureComponent } from 'react'
import Comments from '../components/comments'

class Article extends PureComponent {
  state = {
    isOpenComments: false
  }

  handleClickToggleArticle = () => this.props.toggleOpen(this.props.article.id)

  handleClickToggleComments = () =>
    this.setState((prevState) => ({
      isOpenComments: !prevState.isOpenComments
    }))

  setSectionRef = (ref) => (this.section = ref)

  get body() {
    const { article } = this.props
    return <section ref={this.setSectionRef}>{article.text}</section>
  }

  render() {
    const { article, isOpen } = this.props
    const { isOpenComments } = this.state
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
              {isOpenComments ? 'close' : 'open'}
            </button>
          )}
        {isOpenComments && <Comments comments={article.comments} />}
      </div>
    )
  }
}

export default Article
