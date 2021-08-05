import styles from '../styles/sheet.module.css'
import { useGame } from './game-provider'

export default function StatusBar() {
  const { reset, turns, winner } = useGame()
  const isFinished = (turns.x.length + turns.o.length) === 9 
  const isDraw = isFinished && !winner

  return (
    <div className={styles.statusBar}>
      {(isDraw || winner) && (
        <>
          <p className={styles.text}>
            {isDraw && 'The game is a draw'}
            {winner && `${winner.letter.toUpperCase()} is the winner`}
          </p>
          <button
            className={styles.button}
            onClick={reset}>
            Play Again
          </button>
        </>
      )}
    </div>
  )
}

