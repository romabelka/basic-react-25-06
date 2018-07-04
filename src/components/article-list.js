import React, { Component } from 'react'
import Article from './article'
import List from './list'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    return (
      <List
        items={this.props.articles}
        getKey={this.getKey}
        getItem={this.getItem}
      />
    )
  }

  getKey = (article) => {
    return article.id
  }

  getItem = (article) => {
    return (
      <Article
        article={article}
        isOpen={this.props.openItemId === article.id}
        toggleOpen={this.props.toggleOpenItem}
      />
    )
  }
}

export default accordion(ArticleList)
