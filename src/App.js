import React, { useState } from 'react';
import Data3 from './components/DataTable.3'
import KEY from './KeyContext'

function App() {
  const [q, setQ] = useState('Harry Potter')

  return (
    <KEY.Provider value={process.env.REACT_APP_OMDB_API_KEY}>
      <div>
        <input
          className="search-input"
          type="search"
          name="q"
          defaultValue={q}
          onKeyPressCapture={e => (e.key === 'Enter' && setQ(e.target.value))}
          onBlur={e => { setQ(e.target.value) }}
        />
      </div>
      <div className="movies-container">
        <Data3 query={q} />
      </div>
    </KEY.Provider>
  );
}

export default App;
