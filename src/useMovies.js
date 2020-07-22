import { useState, useEffect, useContext } from 'react';
import KeyContext from './KeyContext';
import request from './request';
import queryString from 'query-string';

const url = '//www.omdbapi.com/'

const sortMovies = (movies = []) => movies.sort((a, b) => (a.Year - b.Year))

const getUrl = (params) => [url, queryString.stringify(params)].join('?')

const useMovies = (query = null) => {
  const [q, setQuery] = useState(query)
  const [movies, setMovies] = useState([]);
  const apikey = useContext(KeyContext);

  useEffect(() => {
    q && request(getUrl({ apikey, s: q }))
    .then(r => r.Search)
    .then(sortMovies)
    .then(setMovies)
  }, [q, apikey])

	return [movies, setQuery];
}

export default useMovies;