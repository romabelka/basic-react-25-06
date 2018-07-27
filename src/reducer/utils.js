import { OrderedMap } from 'immutable'

export function arrToMap(arr, ItemRecord) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item),
    new OrderedMap({})
  )
}

export function filterArrayById(arr, filters) {
  return arr.filter((element) => {
    return !filters.has(element.id)
  })
}
