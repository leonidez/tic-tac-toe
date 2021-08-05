import styles from '../styles/sheet.module.css'
import { useGame } from './game-provider'

export default function StatusBar() {
  const { reset, winner } = useGame()

  return (
    <div className={styles.statusBar}>
      {winner && (
        <>
          <p className={styles.text}>
            {`${winner.letter.toUpperCase()} `}
            is the winner
          </p>
          <button
            onClick={reset}>
            Play Again
          </button>
        </>
      )}
    </div>
  )
}

