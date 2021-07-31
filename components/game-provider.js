import { createContext, useContext, useState } from 'react'

const GameContext = createContext()

export function useGame() {
  return useContext(GameContext)
}

export default function GameProvider({ children }) {
  const [turns, setTurns] = useState({
    x: [],
    o: [],
    next: 'x',
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
