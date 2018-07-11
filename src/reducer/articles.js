import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'
import articles from '../fixtures'

const initialState = {
  items: articles,
  filtered: articles,
  filterParams: {
    from: null,
    to: null,
    selected: null
  }
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return {
        ...state,
        items: state.items.filter((article) => article.id !== payload.id),
        filtered: state.filtered.filter((article) => article.id !== payload.id)
      }

    case FILTER_ARTICLES:
      console.log(333, payload)
      return {
        ...state,
        filtered: payload.articles,
        filterParams: payload.filterParams
      }

    default:
      return state
  }
}
