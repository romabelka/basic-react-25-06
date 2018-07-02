import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  /*
    constructor(...args) {
        super(...args)

        this.state = {
            openArticleId: null
        }
    }
*/

  state = {
    openArticleId: null
  }

  render() {
    return <ul>{this.articles}</ul>
  }

  get articles() {
    return this.props.articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={this.state.openArticleId === article.id}
          toggleOpen={this.toggleOpenArticle}
        />
      </li>
    ))
  }

  toggleOpenArticle = (openArticleId) => this.setState({ openArticleId })
}

export default ArticleList
