import styles from '../styles/sheet.module.css'
import { useGame } from './game-provider'

export default function StatusBar() {
  const { reset, turns, winner } = useGame()
  const isFinished = (turns.x.length + turns.o.length) === 9 
  const isDraw = isFinished && !winner
  const isDoubleWin = winner && winner.squares.length === 5

  function getStatusMessage() {
    if (isDraw) {
      return 'The game is a draw.'
    } else if (isDoubleWin) {
      return `${winner.letter.toUpperCase()} is a double winner!`
    } else if (winner) {
      return `${winner.letter.toUpperCase()} is the winner!`
    }
  }

  return (
    <div className={styles.statusBar}>
      {(isDraw || winner) && (
        <>
          <p className={styles.text}>
            {getStatusMessage()}
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

