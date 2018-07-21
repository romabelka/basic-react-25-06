import { Record } from 'immutable'
import { arrToMap } from '../utils'

export const ArticleRecord = Record({
  id: null,
  text: null,
  title: null,
  date: null,
  comments: [],
  loading: false,
  loaded: false,
  commentsLoading: false,
  commentsLoaded: false,
  commentsError: null
})

export const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

export const EntityRecord = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
})
