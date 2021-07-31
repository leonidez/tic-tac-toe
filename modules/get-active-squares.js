import { flattenDeep, uniq } from 'lodash'
import getAdjacentIds from './get-adjacent-ids'

export default function getActiveSquares({ x, o }) {
  const adjacentX = getAdjacentIds(x)
  const adjacentO = getAdjacentIds(o)

  const ids = flattenDeep([
    ...adjacentX,
    ...adjacentO,
  ])

  return uniq(ids).filter(
    (id) => id >= 0 && id <= 99
  )
}
