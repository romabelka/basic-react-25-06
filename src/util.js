export function arrToObject(arr) {
  return arr.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item
    }),
    {}
  )
}
