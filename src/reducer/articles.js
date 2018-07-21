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
import { ArticleRecord, EntityRecord } from './records'

export default (articles = new EntityRecord(), action) => {
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
      return articles
        .setIn(['entities', payload.id], new ArticleRecord(response))
        .setIn(['entities', payload.id, 'loaded'], true)

    case LOAD_ARTICLE_COMMENTS + START:
      return articles.setIn(
        ['entities', payload.articleId, 'commentsLoading'],
        true
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return articles
        .setIn(['entities', payload.articleId, 'commentsError'], null)
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsLoaded'], true)

    case LOAD_ARTICLE_COMMENTS + FAIL:
      return articles
        .setIn(
          ['entities', payload.articleId, 'commentsError'],
          error.toString()
        )
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)

    default:
      return articles
  }
}
