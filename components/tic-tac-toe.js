import { useEffect } from 'react'

import { useGame } from './game-provider'
import Square from './square'
import getActiveSquares from '../modules/get-active-squares'
import styles from '../styles/sheet.module.css'

export default function TicTacToe({ squares }) {
  const { turns, setTurns } = useGame()

  useEffect(() => {
    const { x, o } = turns
    const active = getActiveSquares([...x, ...o])

    setTurns((state) => ({
      ...state,
      active,
    }))
  }, [turns.next])

  return (
    <div 
      className={styles.container}>
      {squares.map((square) => {
        return (
          <Square 
            key={square} 
            id={square} />
        )
      })}
    </div>
  )
}
