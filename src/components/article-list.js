import React, { Component } from 'react'
import Article from './article'
import Comments from './comments'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    return <ul>{this.articles}</ul>
  }

  get articles() {
    return this.props.articles.map((article) => {
      const isArticleOpen = this.props.openItemId === article.id

      return (
        <li key={article.id}>
          <Article
            article={article}
            isOpen={isArticleOpen}
            toggleOpen={this.props.toggleOpenItem}
          />
          {isArticleOpen && <Comments comments={article.comments} />}
        </li>
      )
    })
  }
}

export default accordion(ArticleList)
