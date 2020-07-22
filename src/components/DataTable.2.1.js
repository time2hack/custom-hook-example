import React, { useEffect, useState, useContext } from 'react';
import KEY from '../KeyContext';

const url = 'http://www.omdbapi.com/?s='

const DataTable = ({ query = 'Harry Potter' }) => {
  const key = useContext(KEY);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(`${url}${query}&apikey=${key}`)
      .then(r => r.json()).then(res => setMovies(res.Search.sort((a,b) => (a.Year-b.Year))))
  }, [key, query])

  return (
    <div>
      {movies.map(({Poster, Title, imdbID, Year}) => (
        <div key={imdbID}>
          <img src={Poster} height="100" alt={Title} />
          <p>
            <a href={`/?t=${imdbID}`}>{Title}</a>
            <br />{Year}
          </p>
        </div>
      ))}
    </div>
  )
}

export default DataTable