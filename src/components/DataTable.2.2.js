import React, { useEffect, useState, useContext } from 'react';
import KEY from './KeyContext';
import DataTable1 from './DataTable.1'

const url = '//www.omdbapi.com/?s='

const DataTable = ({ query = 'Harry Potter' }) => {
  const key = useContext(KEY);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(`${url}${query}&apikey=${key}`)
      .then(r => r.json()).then(res => setMovies(res.Search.sort((a,b) => (a.Year-b.Year))))
  }, [key, query])

  return (
    <DataTable1 movies={movies} />
  )
}

export default DataTable