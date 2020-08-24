import React from 'react';
import Row from './Components/Row'
import request from "./request"
import Banner from './Components/Banner'
import Nav from './Components/Nav';

import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetlifOriginal} isLargeRow />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top rated" fetchUrl={request.fetchTopRated} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaryMovies} />
    </div>
  );
}

export default App;
