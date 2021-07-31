import { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styles from '../styles/sheet.module.css'
import { useGame } from './game-provider'

export default function Square({ id }) {
  const [letter, setLetter] = useState('')
  const { turns, setTurns } = useGame()

  useEffect(() => {
    if (turns.active.length && !turns.active.includes(id)) {
      remove()
    }
  }, [turns.active])

  const [style, animation] = useSpring(() => ({
    opacity: 1,
    transform: 'rotate(0turn)'
  }))

  function remove() {
    animation.start({
      opacity: 0,
      transform: 'rotate(-0.15turn)'
    })
  }

  function takeTurn() {
    if (letter) { return }
    if (turns.active.length && !turns.active.includes(id)) {
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