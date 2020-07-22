import React, { useEffect } from 'react';
import useMovies from '../useMovies';

const DataTable = ({ query }) => {
  const [movies, loadMovies] = useMovies(query)

  useEffect(() => { loadMovies(query) }, [loadMovies, query])

  return (
    <div>
      {movies.map(({Poster, Title, imdbID, Year}) => (
        <div className="movie" key={imdbID}>
          <img className="movie-poster" src={Poster} height="100" alt={Title} />
          <p className="movie-title">
            <a href={`/?t=${imdbID}`}>{Title}</a>
            <br />{Year}
          </p>
        </div>
      ))}
    </div>
  )
}

export default DataTable