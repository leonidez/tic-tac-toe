import { createContext, useContext, useEffect, useState } from 'react'

const GameContext = createContext()

export function useGame() {
  return useContext(GameContext)
}

export default function GameProvider({ children }) {
  const [turns, setTurns] = useState({
    active: [],
    next: 'x',
    o: [],
    x: [],
  })

  const context = {
    setTurns,
    turns,
  }

  return (
    <GameContext.Provider 
      value={context}>
      {children}
    </GameContext.Provider>
  )
}
