import styles from '../styles/sheet.module.css'
import TicTacToe from '../components/tic-tac-toe'

export default function Home() {
  return (
    <div className={styles.container}>
      <TicTacToe />
    </div>
  )
}
