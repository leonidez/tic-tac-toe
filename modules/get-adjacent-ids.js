export default function getAdjacentIds(ids) {
  return ids.map((id) => {
    const onLeftEdge = id % 9 === 0
    const onRightEdge = id % 9 === 8 

    return [
      // inner ring

      !onLeftEdge && id - 10,
      id - 9,
      id - 8,
      !onLeftEdge && id - 1,
      id,
      id + 1,
      !onLeftEdge && id + 8,
      id + 9,
      id + 10,

      // outer ring

      !onLeftEdge && id - 20,
      !onLeftEdge && id - 19,
      id - 18,
      id - 17,
      id - 16,

      !onLeftEdge && id - 11,
      id - 7,
      !onLeftEdge && id - 2,
      id + 2,
      !onLeftEdge && id + 7,
      id + 11, 

      !onLeftEdge && id + 16, 
      !onLeftEdge && id + 17, 
      id + 18, 
      id + 19, 
      id + 20, 
    ].filter((id) => id !== false)
  })
}
