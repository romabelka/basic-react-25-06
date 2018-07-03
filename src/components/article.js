import React, { PureComponent } from 'react'
import CommentList from './comments-list'

class Article extends PureComponent {
  render() {
    console.log('---', 'rerendering article')
    const { article, isOpenArticle, isOpenComments } = this.props
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.toggleArticle}>
            {isOpenArticle ? 'close article' : 'open article'}
          </button>
          <button onClick={this.toggleComments}>
            {isOpenComments ? 'close comments' : 'open comments'}
          </button>
        </h3>
        {this.body}
        {this.comments}
      </div>
    )
  }

  toggleArticle = () => this.props.toggleOpenArticle(this.props.article.id)
  toggleComments = () => this.props.toggleOpenComments(this.props.article.id)

  get body() {
    const { isOpenArticle, article } = this.props
    if (!isOpenArticle) return null

    return <section ref={this.setSectionRef}>{article.text}</section>
  }

  get comments() {
    const { isOpenComments, article } = this.props
    if (!isOpenComments) return null

    return (
      <section>
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
