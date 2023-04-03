import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getMoviesThunk } from '../actions/movies'
import { useEffect } from 'react'
import { Movie } from '../../common/types'

function App() {
  const dispatch = useAppDispatch()
  const movieList = useAppSelector((state) => state.movies as Movie[])
  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        {movieList &&
          movieList.map((el) => (
            <div key={el.id}>
              <h1>{el.title}</h1>
              <h3>Rating: {el.rating} out of 10</h3>
              <img alt="shrek" src={el.image} />
            </div>
          ))}
      </section>
    </>
  )
}

export default App
