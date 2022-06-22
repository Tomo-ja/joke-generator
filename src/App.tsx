import React, { useContext } from 'react';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Main from './Component/Main';
import './App.scss';

interface JokesContext{
    joke: string,
    favorite: boolean
}

const HistoryJokesContext = React.createContext<JokesContext[]>([])

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
