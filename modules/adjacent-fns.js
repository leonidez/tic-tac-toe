export function defaultAdjacent(id) {
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

export function firstColumnAdjacent(id) {
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

export function secondColumnAdjacent(id) {
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
    id - 19,
    id - 18,
    id - 17,
    id - 16,
    id - 7,
    id + 2,
    id + 11, 
    id + 17, 
    id + 18, 
    id + 19, 
    id + 20, 
  ]
}

export function eighthColumnAdjacent(id) {

}

export function ninthColumnAdjacent(id) {
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
