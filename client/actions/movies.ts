import { ThunkAction } from '../store'
import { Movie } from '../../common/types'
import { fetchMovies } from '../apis/movies'

export const SHOW_MOVIES = 'SHOW_MOVIES'

// SIMPLE ACTIONS

export function getMoviesAction(movies: Movie[]) {
  return {
    type: SHOW_MOVIES,
    payload: movies,
  }
}

// THUNCCTIONS

export function getMoviesThunk(): ThunkAction {
  return (dispatch) => {
    return fetchMovies() //get data from the API
      .then((movies) => {
        //take the data from the API
        dispatch(getMoviesAction(movies)) // dispatch simple getMoviesAction above
      })
      .catch((err) => console.log(err.message))
  }
}
