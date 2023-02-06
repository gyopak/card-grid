import Card from './Card'
import cx from 'classnames'
import './CardLayout.css'
import { useGetCardContentByPageQuery } from './features/cardContentApiSlice';

const getHeader = id => [
  'Connect people & spaces',
  'Explore new products',
  'Management simplified',
  'Learn about software',
  'Explore credentials'
][id % 5];

function CardLayout({ page = 0, isLastPage, setLastPage }) {
  const { data } = useGetCardContentByPageQuery(page);
  const onNextClick = () => {
    setLastPage(page + 1)
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }, 250)
  };

  const ids = [...Array(7).keys()]
  return (
    <div className="CardLayout">
      <div className="TitleCard">
        <h1 className="Header">{getHeader(page)}</h1>
      </div>
      {ids.map(id => (
        <Card
          key={`${page}-${id}`}
          id={id}
          data={data?.[id]}
          page={page}
        />
      ))}
      <div className="ShowMore">
        <button
          className={cx({ LastButton: isLastPage })}
          onClick={onNextClick}
        >
          Show more
        </button>
      </div>
    </div>
  )
}

export default CardLayout
