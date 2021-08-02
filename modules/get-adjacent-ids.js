import { 
  defaultAdjacent,
  firstColumnAdjacent,
  secondColumnAdjacent,
  eighthColumnAdjacent,
  ninthColumnAdjacent 
} from './adjacent-fns'

export default function getAdjacentIds(ids) {
  return ids.map((id) => {
    switch (id % 9) {
      case 0:
        return firstColumnAdjacent(id)
      case 1:
        return secondColumnAdjacent(id)
      case 7:
        return eighthColumnAdjacent(id)
      case 8:
        return ninthColumnAdjacent(id) 
      default:
        return defaultAdjacent(id)
    }
  })
}
