import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START,
  FAIL,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS
} from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const ArticleRecord = Record({
  id: null,
  text: null,
  title: null,
  date: null,
  loading: false,
  commentsLoading: false,
  commentsLoaded: false,
  comments: []
})

const ReducerState = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (articles = new ReducerState(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      return articles.updateIn(
        ['entities', payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES + START:
      return articles.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articles
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_ARTICLES + FAIL:
      return articles.set('error', error)

    case LOAD_ARTICLE + START:
      return articles.setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return articles.setIn(
        ['entities', payload.id],
        new ArticleRecord(response)
      )

    case LOAD_ARTICLE_COMMENTS + START:
      return articles.setIn(['entities', payload.id, 'commentsLoading'], true)

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return articles
        .setIn(['entities', payload.id, 'commentsLoading'], false)
        .setIn(['entities', payload.id, 'commentsLoaded'], true)

    case LOAD_ARTICLE_COMMENTS + FAIL:
      return articles.set('error', error)

    default:
      return articles
  }
}
