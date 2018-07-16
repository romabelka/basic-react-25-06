import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filters'
import user from './user'
import { reducer as toastr } from 'react-redux-toastr'

export default combineReducers({
  counter: counterReducer,
  articles,
  comments,
  filters,
  user,
  toastr
})
