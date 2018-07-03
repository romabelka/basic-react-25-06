//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    // стейт аккордеона с полем openItemId
    state = {
      openItemId: null
    }

    //метод - меняет стейт декоратора: кладет в поле openItemId новый id открытой статьи
    toggleOpenItem = (openItemId) => this.setState({ openItemId })

    render() {
      return (
        <OriginalComponent
          {...this.props} // передает пропсы из App в ArticleList
          {...this.state} // что бы передать openItemId из своего state в ArticleList>Article
          toggleOpenItem={this.toggleOpenItem} // прокидывает свой метод (стр10) в ArticleList>Article
        />
      )
    }
  }
