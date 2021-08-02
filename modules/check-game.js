export default function checkGame(turns) {
  const { x, o } = turns
  console.log(x)
  if (x.length >= 3) {
    for (let i = 0; i < x.length; i++) {
      const across = (
        x.indexOf(x[i] - 1) !== -1 &&
        x.indexOf(x[i] + 1) !== -1
      )

      if (across) {
        return {
          letter: 'x',
        }
      }

      const down = (
        x.indexOf(x[i] - 9) !== -1 &&
        x.indexOf(x[i] + 9) !== -1
      )

      if (down) {
        return {
          letter: 'x',
        }
      }

      const diagonal = (
        x.indexOf(x[i] - 8) !== -1 &&
        x.indexOf(x[i] + 8) !== -1
      ) || (
        x.indexOf(x[i] - 10) !== -1 &&
        x.indexOf(x[i] + 10) !== -1
      )

      if (diagonal) {
        return {
          letter: 'x',
        }
      }
    }
  }
}
