import React, { useState } from 'react';
import Data3 from './components/DataTable.3'
import KEY from './KeyContext'

function App() {
  const [q, setQ] = useState('Harry Potter')

  return (
    <KEY.Provider value={process.env.REACT_APP_OMDB_API_KEY}>
      <div>
        <input
          type="search"
          name="q"
          defaultValue={q}
          onBlur={e => { setQ(e.target.value) }}
        />
      </div>
      <Data3 query={q} />
    </KEY.Provider>
  );
}

export default App;
