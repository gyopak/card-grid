import { useEffect, useRef, useState } from 'react'
import useCardBackground from './hooks/useCardBackground'
import './Card.css'
import useCardSize from './hooks/useCardSize';


function Card({ id, page }) {
  const { cardRef, size } = useCardSize();
  const background = useCardBackground(id, page, size);
  console.log(page, id)
  return (
    <div
      className={`Card${id} Card`}
      ref={cardRef}
      style={{
        backgroundBlendMode: 'darken',
        background,
      }}
    >

    </div>
  )
}

export default Card