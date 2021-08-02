import { useEffect, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import styles from '../styles/sheet.module.css'
import { useGame } from './game-provider'

export default function Square({ id }) {
  const [letter, setLetter] = useState('')
  const { turns, setTurns } = useGame()

  function isIneligible() {
    return turns.active.length && !turns.active.includes(id)
  }

  useEffect(() => {
    if (isIneligible()) {
      remove()
    }
  }, [turns.active])

  const [style, animation] = useSpring(() => ({
    border: '2px solid black',
    outline: '2px solid black',
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
      style={style}>
      <span 
        className={styles.letter}>
        {letter.toUpperCase()}
      </span>
    </animated.div>
  )
}
