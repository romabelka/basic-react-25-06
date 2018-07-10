import articles from '../fixtures'
import { FILTER_ARTICLE } from '../constants'

export default (
  filters = { articles: [...articles], selected: [], from: null, to: null },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ARTICLE:
      console.log('payload', payload)

      return {
        articles: [...articles],
        selected: payload.selected,
        from: payload.from,
        to: payload.to
      }
    default:
      return filters
  }
}
