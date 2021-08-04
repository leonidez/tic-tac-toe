function listHasIds({ at, list, id }) {
  const winner = (
    list.indexOf(id - at) !== -1 &&
    list.indexOf(id + at) !== -1
  )

  if (winner) {
    return [id - at, id, id + at]
  } else {
    return false
  }
}

function check(list) {
  for (let id of list) {
    const across = listHasIds({ at: 1, list, id })
    const down = listHasIds({ at: 9, list, id })

    const diagonal = (
      listHasIds({ list, id, at: 8 }) ||
      listHasIds({ list, id, at: 10 })
    )
    
    const winner = (across || down || diagonal)

    if (winner) { return winner }
  }
}

export default function checkGame(turns) {
  const { x, o } = turns

  if (x.length >= 3) {
    const winningSquares = check(x)
 
    if (winningSquares) {
      return {
        letter: 'x',
        squares: winningSquares
      }
    }
  }

  if (o.length >= 3) {
    const winningSquares = check(o)
 
    if (winningSquares) {
      return {
        letter: 'o',
        squares: winningSquares
      }
    }
  }

  return false
}
