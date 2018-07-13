import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { OrderedMap, Record } from 'immutable'

const Article = Record({
  id: '',
  date: '',
  title: '',
  text: '',
  comments: []
})

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  return acc.set(article.id, new Article(article))
}, new OrderedMap({}))

export default (articlesState = defaultArticles, action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case ADD_COMMENT:
      return articlesState.updateIn(
        [payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      )

    default:
      return articlesState
  }
}
