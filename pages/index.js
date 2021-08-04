import GameProvider from '../components/game-provider'
import TicTacToe from '../components/tic-tac-toe'
import styles from '../styles/sheet.module.css'

const squares = Array.from(Array(81).keys())

export default function Home() {
  return (
    <GameProvider>
      <h1 className={styles.heading}>X vs O </h1>
      <div className={styles.wrapper}>
        <TicTacToe squares={squares} />
      </div>
    </GameProvider>
  )
}
