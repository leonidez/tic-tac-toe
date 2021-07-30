import styles from '../styles/sheet.module.css'
import TicTacToe from '../components/tic-tac-toe'

const squares = Array.from(Array(100).keys())

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <TicTacToe squares={squares} />
    </div>
  )
}
