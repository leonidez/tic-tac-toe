export default function scale({ canvas, context }) {
  const size = 500

  canvas.style.height = `${size}px`
  canvas.style.width = `${size}px`

  const scale = window.devicePixelRatio

  canvas.width = size * scale
  canvas.height = size * scale

  context.scale(scale, scale)
}
