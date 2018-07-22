import {ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import { arrToMap } from './utils'
import {Record} from "immutable";

const ArticleComments = Record({
  entities: arrToMap([]),
  loading: false,
  loaded: false
})


export default (state = arrToMap([], ArticleComments), action) => {
  const { type, payload, randomId, response, error } = action
  switch (type) {
    case ADD_COMMENT:
      return state.setIn([payload.articleId, 'entities', randomId], {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + START:
      return state.set(payload.articleId,  new ArticleComments({loading: true}))

    case LOAD_COMMENTS + SUCCESS:
      return state
        .setIn([payload.articleId, 'entities'], arrToMap(response))
        .setIn([payload.articleId, 'loading'], false)
        .setIn([payload.articleId, 'loaded'], true)

    default:
      return state
  }
}
