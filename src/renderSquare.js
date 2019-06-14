import React from 'react'
import Knight from './Knight'
import BoardSquare from './BoardSquare'

export default function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}
