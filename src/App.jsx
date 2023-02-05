import { useState } from 'react'
import './App.css'
import CardLayout from './CardLayout';

function App() {
  const [lastPage, setLastPage] = useState(0);
  const pages = [...Array(lastPage + 1).keys()]
  return (
    <div className="App">
      {pages.map(page => (
        <CardLayout
          key={page}
          page={page}
          isLastPage={page === lastPage}
          setLastPage={setLastPage}
        />
      ))}
    </div>
  )
}

export default App
