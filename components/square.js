import { animated, useSpring } from 'react-spring'
import styles from '../styles/sheet.module.css'

export default function Square({ id }) {
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
  }

  return (
    <animated.div 
      className={styles.square} 
      onClick={takeTurn}
      style={style}>
      <span 
        className={styles.letter}>
      </span>
    </animated.div>
  )
}

