import { useEffect, useRef } from 'react'

import draw from '../modules/draw'
import scale from '../modules/scale'

export default function TicTacToe() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    scale({ canvas, context })
    draw({ canvas, context })
  }, [])

  return (
    <canvas ref={canvasRef} />
  )
}
