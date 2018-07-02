import React, { Component } from 'react'

class Article extends Component {
  render() {
    const { article, isOpen, toggleOpen } = this.props
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
        </h3>
        {this.body}
      </div>
    )
  }

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return <section>{article.text}</section>
  }
}

export default Article
