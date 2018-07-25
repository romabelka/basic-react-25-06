import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filters'
import commentsPaginated from './comments-paginated'

export default combineReducers({
  counter: counterReducer,
  articles,
  comments,
  filters,
  commentsPaginated
})
