import { OrderedMap } from 'immutable'
import { Record } from 'immutable'

export function getReducerState(ItemRecord) {
  const ReducerState = Record({
    entities: arrToMap([], ItemRecord),
    loading: false,
    loaded: false,
    error: null
  })
  return new ReducerState()
}
export function arrToMap(arr, ItemRecord) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item),
    new OrderedMap({})
  )
}
