import { useEffect, useState } from 'react'

import { useGame } from './game-provider'
import Square from './square'

import getActiveSquares from '../modules/get-active-squares'
import styles from '../styles/sheet.module.css'

function VictoryMessage() {
  const { reset, winner } = useGame()

  return (
    <>
      <p>{winner.letter.toUpperCase()} is the winner</p>
      <button
        onClick={reset}>
        Play Again
      </button>
    </>
  )
}

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
    <>
      {winner && <VictoryMessage />}
      <div 
        className={styles.container}>
        {squares.map((square) => {
          const isWinningSquare = winner && winner.squares.includes(square)
          return (
            <Square 
              id={square}
              key={square} 
              isWinningSquare={isWinningSquare} />
          )
        })}
      </div>
    </>
  )
}
