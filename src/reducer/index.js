import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import articlesFilter from './articles-filters'

export default combineReducers({
  counter: counterReducer,
  articles,
  articlesFilter
})
