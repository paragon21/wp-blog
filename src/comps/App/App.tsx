import React from 'react';
import './App.css';
import Container from '../container'
import Header from '../header'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <h1> Блог по IT, <br /> инструкции, мануалы, <br /> оптимизации </h1>
        <h2> + много чего еще</h2>

      </Container>
      
    </div>
  );
}

export default App;
