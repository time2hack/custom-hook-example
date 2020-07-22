import React from 'react';

const DataTable = ({ movies = []}) => (
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

export default DataTable