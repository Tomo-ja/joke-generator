import React, { useState } from 'react'
import { JokeModel } from '../App'
import axios from '../Apis/axios'
import request from '../Apis/Request'
import sampleData from '../Apis/sampleResponse'
import Joke from './Joke'

export default function Hero() {

	const [instantJoke, setInstantJoke] = useState<undefined | JokeModel>()

 	async function getRandomJoke(){
		 try{
			const joke = await axios.get(request.fetchRandomJoke);
			setInstantJoke(joke.data.text)
		 }catch(e){
			 setInstantJoke({phrase: sampleData.random.text, favorite: false})
			 console.log(e)
		 }
	}

  return (
	<div className='hero'>
		<button onClick={getRandomJoke} className='hero__button'>Quick Joke</button>
		<div className='hero__joke'>
			{ instantJoke !== undefined && 
				<Joke joke={ instantJoke } />
			}
		</div>
	</div>
  )
}
