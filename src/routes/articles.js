import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../components/article-list'
import Article from '../components/article'

class ArticlesRoute extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    return <Article id={match.params.id} isOpen />
  }
}

export default ArticlesRoute
