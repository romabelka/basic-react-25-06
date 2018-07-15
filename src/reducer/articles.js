import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articlesState = normalizedArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      // не успел пофиксить обновление
      return articlesState.filter((article) => article.id !== payload.id)
    //так и не понял почему стейт изменился, но ререндеринга не было:(((
    case ADD_COMMENT: {
      console.log(payload.articleId)
      return articlesState.map((el, index) => {
        if (index === parseInt(payload.articleId)) {
          let newArr = Array.prototype.concat(el.comments, payload.id)
          el.comments = Array.prototype.concat(newArr)
        }

        return el
      })
    }
    default:
      return articlesState
  }
}
