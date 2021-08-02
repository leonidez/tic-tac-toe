import { useEffect, useState } from 'react'

import { useGame } from './game-provider'
import Square from './square'

import checkGame from '../modules/check-game'
import getActiveSquares from '../modules/get-active-squares'
import styles from '../styles/sheet.module.css'

export default function TicTacToe({ squares }) {
  const [winner, setWinner] = useState()
  const { turns, setTurns } = useGame()

  useEffect(() => {
    const { x, o } = turns
    const active = getActiveSquares(x.concat(o))

    setTurns((state) => ({
      ...state,
      active,
    }))
  }, [turns.next])

  useEffect(() => {
    console.log('here')
    const winner = checkGame(turns)
    if (winner) {
      setWinner(winner)
    }
  }, [turns.next])

  return (
    <div 
      className={styles.container}>
      {winner && <p>winner is {winner.letter}</p>}
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
