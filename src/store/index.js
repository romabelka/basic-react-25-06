import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//DEV Only, no need in prod
//noinspection JSAnnotator
window.store = store

export default store
