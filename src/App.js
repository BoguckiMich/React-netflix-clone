import React from 'react';
import Row from './Components/Row'
import request from "./request"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello world! </h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetlifOriginal} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
