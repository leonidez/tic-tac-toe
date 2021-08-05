import { useEffect } from 'react'

import { useGame } from './game-provider'
import Square from './square'
import StatusBar from './status-bar'

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
    <>
      <StatusBar />
      <div className={styles.wrapper}>
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
      </div>
    </>
  )
}
