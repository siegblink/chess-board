import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

export default function Knight() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({ isDragging: !!monitor.isDragging() }),
  })

  const style = {
    opacity: isDragging ? 0.5 : 1,
    fontSize: '5rem',
    cursor: 'grab',
  }

  return (
    <div ref={drag} style={style}>
      ♘
    </div>
  )
}
