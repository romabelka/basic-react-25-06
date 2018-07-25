import { OrderedMap, OrderedSet } from 'immutable'

export function arrToMap(arr, ItemRecord) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item),
    new OrderedMap({})
  )
}
export function arrToSet(arr, ItemRecord) {
  return OrderedSet.of(
    ...arr.map((item) => (ItemRecord ? new ItemRecord(item) : item))
  )
}
