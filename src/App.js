import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
