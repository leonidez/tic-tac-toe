import Square from './square'
import styles from '../styles/sheet.module.css'

export default function TicTacToe({ squares }) {
  return (
    <div 
      className={styles.container}>
      {squares.map((square) => {
        return (
          <Square 
            key={square} 
            id={square} />
        )
      })}
    </div>
  )
}
