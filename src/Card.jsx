import useCardBackground from './hooks/useCardBackground'
import useCardSize from './hooks/useCardSize';
import './Card.css'

function Card({ id, page, data}) {
  const { cardRef, size } = useCardSize();
  const background = useCardBackground(id, page, size);

  return (
    <div
      className={`Card${id} Card`}
      ref={cardRef}
      style={{
        backgroundBlendMode: 'darken',
        background,
      }}
    >
      <h2>{data?.name}</h2>
      <h3>{data?.tagline}</h3>
      <p className="Caret">›</p>
    </div>
  )
}

export default Card