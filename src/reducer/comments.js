import {
  ADD_COMMENT,
  FAIL,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS
} from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ArticleCommentsRecord = Record({
  id: null,
  comments: arrToMap([], CommentRecord),
  loading: false,
  loaded: false,
  error: null
})

const ReducerState = Record({
  entities: arrToMap([], ArticleCommentsRecord)
})

const getArticle = (comments, articleId) => {
  let article = comments.entities[articleId]
  if (!article) {
    article = new ArticleCommentsRecord().setIn(['id'], articleId)
  }
  return article
}

export default (comments = new ReducerState(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case ADD_COMMENT:
      let article = getArticle(comments, payload.articleId)
      return comments.setIn(
        ['entities', payload.articleId, 'comments', randomId],
        {
          ...payload.comment,
          id: randomId
        }
      )

    case LOAD_ARTICLE_COMMENTS + START:
      article = getArticle(comments, payload.articleId)
      return comments.set(
        'entities',
        comments.entities.set(
          payload.articleId,
          article
            .set('loading', true)
            .set('loaded', false)
            .set('error', null)
        )
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      article = getArticle(comments, payload.articleId)
      return comments.set(
        'entities',
        comments.entities.set(
          payload.articleId,
          article
            .set('comments', arrToMap(response, CommentRecord))
            .set('loading', false)
            .set('loaded', true)
        )
      )

    case LOAD_ARTICLE_COMMENTS + FAIL:
      article = getArticle(comments, payload.articleId)
      return comments.set(
        'entities',
        comments.entities.set(
          payload.articleId,
          article.set('error', error).set('loading', false)
        )
      )

    default:
      return comments
  }
}
