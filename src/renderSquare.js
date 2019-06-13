import React from 'react'
import Knight from './Knight'
import Square from './Square'
import { canMoveKnight, moveKnight } from './Game'

export default function renderSquare(i, [knightX, knightY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div
      onClick={() => handleSquareClick(x, y)}
      key={i}
      style={{ width: '12.5%', height: '12.5%' }}
    >
      <Square black={black}>{piece}</Square>
    </div>
  )
}

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY)
  }
}
