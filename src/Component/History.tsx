import React, { useContext } from 'react'
import { HistoryJokesContext } from '../App'
import Joke from './Joke'


export default function History() {

  const { jokesHistory, setJokesHistory } = useContext(HistoryJokesContext)

  return (
	<section>
    { jokesHistory.length === 0 ? 
      <h2>Jokes you copied or your favorite will be displayed here</h2> :
      jokesHistory.map( joke => (<Joke joke={joke} setJokeHistory={setJokesHistory} />))
    }
  </section>
  )
}
