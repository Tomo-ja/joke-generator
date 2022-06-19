import React, { useState } from 'react'
import axios from '../Apis/axios'
import request from '../Apis/Request'
import sampleData from '../Apis/sampleResponse'

export default function Hero() {

	const [instantJoke, setInstantJoke] = useState<undefined | string>()

 	async function getRandomJoke(){
		 try{
			const joke = await axios.get(request.fetchRandomJoke);
			setInstantJoke(joke.data.text)
		 }catch(e){
			 setInstantJoke(sampleData.random.text)
			 console.log(e)
		 }
	}

  return (
	<div className='hero'>
		<div className='hero__joke'>{instantJoke}</div>
		<button onClick={getRandomJoke} className='hero__button'>click</button>
	</div>
  )
}