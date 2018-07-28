import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import i18n from '../decorators/i18n'

class ArticlesRoute extends Component {
  static propTypes = {}

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
    const { translate } = this.props
    console.log('--- article match', match)
    return match ? (
      <Article id={match.params.id} isOpen key={match.params.id} />
    ) : (
      <h1>{translate('article.need_select')}</h1>
    )
  }
}

export default i18n(ArticlesRoute)
