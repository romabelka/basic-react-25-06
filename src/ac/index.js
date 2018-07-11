import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'

export function increment() {
  return { type: INCREMENT }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export const filter = (filterParams, articles) => {
  console.log(filterParams)
  const data = {
    type: FILTER_ARTICLES,
    payload: { articles, filterParams }
  }

  data.payload.articles = articles.filter((article) => {
    const dateFrom = new Date(filterParams.from).getDate()
    const dateTo = new Date(filterParams.to).getDate()
    const articleTime = new Date(article.date).getDate()
    const selected = filterParams.selected

    const check_date =
      filterParams.from && filterParams.to
        ? articleTime >= dateFrom && articleTime <= dateTo
        : true

    const check_selected =
      selected && selected.length
        ? selected.some((val) => val.value === article.id)
        : true

    return check_date && check_selected
  })

  return data
}
