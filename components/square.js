import { useEffect, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import styles from '../styles/sheet.module.css'
import { useGame } from './game-provider'

export default function Square({ id, isWinningSquare }) {
  const [removed, setRemoved] = useState(false)
  const { setTurns, turns, winner } = useGame()
  const color = isWinningSquare ? 'crimson' : 'black'

  const hasX = turns.x.includes(id)
  const hasO = turns.o.includes(id)

  const letter = hasX ? 'x' : (hasO ? 'o' : '')

  function isIneligible() {
    return turns.active.length && !turns.active.includes(id)
  }

  function isReset() {
    return removed && !turns.x.length && !turns.o.length
  }

  useEffect(() => {
    if (isReset()) {
      setRemoved(false)
    } else if (isIneligible()) {
      setRemoved(true)
    }
  }, [turns.active])

  const [style, animation] = useSpring(() => ({
    border: '1px solid black',
    outline: '1px solid black',
    opacity: 1,
    transform: 'rotate(0turn) scale(1)',
  }))

  function add() {
    animation.start({
      border: '1px solid black',
      outline: '1px solid black',
      opacity: 1,
      transform: 'rotate(0turn) scale(1)',
      config: config.default,
    })
  }

  function remove() {
    animation.start({
      border: '0px solid black',
      outline: '0px solid black',
      opacity: 0,
      transform: 'rotate(-0.125turn) scale(0.2)',
      config: config.molasses,
    })
  }

  useEffect(() => {
    removed ? remove() : add()
  }, [removed])

  function takeTurn() {
    if (winner || letter || isIneligible()) {
      return
    }

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
