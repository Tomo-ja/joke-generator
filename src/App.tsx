import React from 'react';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Joke from './Component/Joke';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Joke phrase='test'/>
    </div>
  );
}

export default App;
