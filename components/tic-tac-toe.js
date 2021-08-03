import { useEffect, useState } from 'react'

import { useGame } from './game-provider'
import Square from './square'

import getActiveSquares from '../modules/get-active-squares'
import styles from '../styles/sheet.module.css'

export default function TicTacToe({ squares }) {
  const { turns, setTurns, winner } = useGame()

  useEffect(() => {
    const { x, o } = turns
    const active = getActiveSquares(x.concat(o))

    setTurns((state) => ({
      ...state,
      active,
    }))
  }, [turns.next])

  return (
    <div 
      className={styles.container}>
      {squares.map((square) => {
        const isWinningSquare = winner && winner.includes(square)
        return (
          <Square 
            id={square}
            key={square} 
            isWinningSquare={isWinningSquare} />
        )
      })}
    </div>
  )
}
