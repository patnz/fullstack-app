import connection from './connection'
import * as Types from '../../common/types'

export function getAllMovies(db = connection): Promise<Types.Movie[]> {
  return db('movies').select('*')
}
