import GameProvider from '../components/game-provider'
import TicTacToe from '../components/tic-tac-toe'
import styles from '../styles/sheet.module.css'

const squares = Array.from(Array(81).keys())

export default function Home() {
  return (
    <GameProvider>
      <div className={styles.wrapper}>
        <TicTacToe squares={squares} />
      </div>
    </GameProvider>
  )
}
