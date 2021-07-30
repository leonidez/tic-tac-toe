export default function draw({ canvas, context }) {
  context.lineWidth = 3

  context.moveTo(100, 100)
  context.lineTo(300, 300)
  context.stroke()
}
