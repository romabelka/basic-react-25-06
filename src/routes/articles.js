import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import localized from '../decorators/localized'

class SelectArticlesText extends Component {
  render() {
    const { local } = this.props
    return <h1>{local.article.route.selectArticles}</h1>
  }
}

const LocalizedSelectArticlesText = localized(SelectArticlesText)

class ArticlesRoute extends Component {
  render() {
    console.log('--- ArticlesRoute match', this.props.match)
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" exact children={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    console.log('--- article match', match)
    return match ? (
      <Article id={match.params.id} isOpen key={match.params.id} />
    ) : (
      <LocalizedSelectArticlesText />
    )
  }
}

export default ArticlesRoute
