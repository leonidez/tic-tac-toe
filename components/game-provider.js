import { createContext, useContext, useEffect, useState } from 'react'
import checkGame from '../modules/check-game'

const GameContext = createContext()

export function useGame() {
  return useContext(GameContext)
}

export default function GameProvider({ children }) {
  const [winner, setWinner] = useState(null)
  const [turns, setTurns] = useState({
    active: [],
    next: 'x',
    o: [],
    x: [],
  })

  useEffect(() => {
    const winner = checkGame(turns)
    if (winner) {
      setWinner(winner)
    }
  }, [turns.next])

  function reset() {
    setWinner(null)
    setTurns({
      active: [],
      next: 'x',
      o: [],
      x: [],
    })
  }

  const context = {
    setTurns,
    turns,
    winner,
    reset,
  }

  return (
    <GameContext.Provider 
      value={context}>
      {children}
    </GameContext.Provider>
  )
}
