function defaultAdjacent(id) {
  return [
    id - 10,
    id - 9,
    id - 8,
    id - 1,
    id,
    id + 1,
    id + 8,
    id + 9,
    id + 10,
    id - 20,
    id - 19,
    id - 18,
    id - 17,
    id - 16,
    id - 11,
    id - 7,
    id - 2,
    id + 2,
    id + 7,
    id + 11, 
    id + 16, 
    id + 17, 
    id + 18, 
    id + 19, 
    id + 20, 
  ]
}

function firstColumnAdjacent(id) {
  return [
    id - 9,
    id - 8,
    id,
    id + 1,
    id + 9,
    id + 10,
    id - 18,
    id - 17,
    id - 16,
    id - 7,
    id + 2,
    id + 11, 
    id + 18, 
    id + 19, 
    id + 20, 
  ]
}

function ninthColumnAdjacent(id) {
  return [
    id - 10,
    id - 9,
    id - 1,
    id,
    id + 8,
    id + 9,
    id - 20,
    id - 19,
    id - 18,
    id - 11,
    id - 2,
    id + 7,
    id + 16, 
    id + 17, 
    id + 18, 
  ]
}

export default function getAdjacentIds(ids) {
  return ids.map((id) => {
    switch (id % 9) {
      case 0:
        return firstColumnAdjacent(id)
      case 1:
        return
      case 7:
        return
      case 8:
        return ninthColumnAdjacent(id) 
      default:
        return defaultAdjacent(id)
    }


    return [
      !onLeftEdge && id - 10,
      id - 9,
      !onRightEdge && id - 8,
      !onLeftEdge && id - 1,
      id,
      !onRightEdge && id + 1,
      !onLeftEdge && id + 8,
      id + 9,
      !onRightEdge && id + 10,
      !onLeftEdge && id - 20,
      !onLeftEdge && id - 19,
      id - 18,
      !onRightEdge && id - 17,
      !onRightEdge && id - 16,
      !onLeftEdge && id - 11,
      !onRightEdge && id - 7,
      !onLeftEdge && id - 2,
      !onRightEdge && id + 2,
      !onLeftEdge && id + 7,
      !onRightEdge && id + 11, 
      !onLeftEdge && id + 16, 
      !onLeftEdge && id + 17, 
      id + 18, 
      !onRightEdge && id + 19, 
      !onRightEdge && id + 20, 
    ].filter((id) => id !== false)
  })
}
