import { combineReducers } from 'redux'
import counterReducer from './counter'
import filtersReducer from './filtersReducer'
import articles from './articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  filtersReducer
})
