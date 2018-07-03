import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    return <ul>{this.articles}</ul>
  }

  get articles() {
    return this.props.articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={this.props.openItemId === article.id} //boolean сравнивает пропс из аккордеона с текущим id
          toggleOpen={this.props.toggleOpenItem} //дальше прокидывает callback
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)
