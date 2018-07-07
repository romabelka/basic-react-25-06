import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }

  render() {
    return <ul className="list-group">{this.articles}</ul>
  }

  get articles() {
    return this.props.articles.map((article) => (
      <li key={article.id} className="list-group-item article-list__item">
        <Article
          article={article}
          isOpen={this.props.openItemId === article.id}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)
