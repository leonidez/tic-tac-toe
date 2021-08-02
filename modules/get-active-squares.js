import getAdjacentIds from './get-adjacent-ids'

export default function getActiveSquares({ x, o }) {
  return getAdjacentIds([...x, ...o])
}
