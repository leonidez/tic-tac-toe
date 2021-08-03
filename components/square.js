import { useEffect, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import styles from '../styles/sheet.module.css'
import { useGame } from './game-provider'

export default function Square({ id, isWinningSquare }) {
  const [letter, setLetter] = useState('')
  const { turns, setTurns } = useGame()
  const color = isWinningSquare ? 'red' : 'black'

  function isIneligible() {
    return turns.active.length && !turns.active.includes(id)
  }

  useEffect(() => {
    if (isIneligible()) {
      remove()
    }
  }, [turns.active])

  const [style, animation] = useSpring(() => ({
    border: '1px solid black',
    outline: '1px solid black',
    opacity: 1,
    transform: 'rotate(0turn) scale(1)',
  }))

  function remove() {
    animation.start({
      border: '0px solid black',
      outline: '0px solid black',
      opacity: 0,
      transform: 'rotate(-0.125turn) scale(0.2)',
      config: config.molasses,
    })
  }

  function takeTurn() {
    if (letter || isIneligible()) {
      return
    }

    setLetter(turns.next)
    setTurns((state) => ({
      ...state,
      [state.next]: [...state[state.next], id],
      next: (state.next === 'x') ? 'o' : 'x',
    }))
  }

  return (
    <animated.div 
      className={styles.square} 
      onClick={takeTurn}
      style={{...style, color }}>
      <span 
        className={styles.letter}>
        {letter.toUpperCase()}
      </span>
    </animated.div>
  )
}
