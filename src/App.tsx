import React, { useContext, useState } from 'react';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Main from './Component/Main';
import './App.scss';

export interface JokeModel{
    phrase: string,
    favorite: boolean
}

interface JokesContext{
  jokesHistory: JokeModel[],
  setJokesHistory: React.Dispatch<React.SetStateAction<JokeModel[]>>
}

export const HistoryJokesContext = React.createContext<JokesContext>({
  jokesHistory: [],
  setJokesHistory: () => {}
})

function App() {

  const [jokesHistory, setJokesHistory] = useState<JokeModel[]>([])
  
  return (
    <div className="App">
      <Header />
      <HistoryJokesContext.Provider value={{jokesHistory: jokesHistory, setJokesHistory: setJokesHistory}} >
          <Hero />
          <Main />
      </HistoryJokesContext.Provider>
    </div>
  );
}

export default App;
