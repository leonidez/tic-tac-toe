import styles from '../styles/sheet.module.css'

function Square({ square }) {
  return (
    <div className={styles.square}>
    </div>
  )

}

export default function TicTacToe({ squares }) {
  return (
    <div className={styles.container}>
      {squares.map((square) => {
        return (
          <Square key={square} />
        )
      })}
    </div>
  )
}
