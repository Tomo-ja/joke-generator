import React from 'react'
import { JokeModel } from '../App'
import copyIconSolid from '../images/icon_copy_solid.svg'
import copyIconBorder from '../images/icon_copy_border.svg'
import starIconSolid from '../images/icon_star_solid.svg'
import starIconBorder from '../images/icon_star_border.svg'

interface JokeProps{
	joke: JokeModel
	setJokeHistory: React.Dispatch<React.SetStateAction<JokeModel[]>>
}

export default function Joke ({ joke, setJokeHistory }: JokeProps) {

	function copyOnClipborad(){
		navigator.clipboard.writeText(joke.phrase)
		setJokeHistory(prev => [...prev, joke])
	}

	function markFavoriteJoke(){
		joke.favorite = !joke.favorite
		if (joke.favorite){
			setJokeHistory(prev => [...prev, joke])
		}else{
			setJokeHistory(prev => (prev.filter(prevJoke => prevJoke.phrase !== joke.phrase)))
		}
	}

  return (
	<div className='joke'>
		<p className='joke__phrase'>{joke.phrase}</p>
		<div className="joke__btn-container">
			<div className="joke__btn-container__btn">
				<img 
					src={copyIconBorder} 
					alt="copy icon"
					onMouseOver={e => {e.currentTarget.src = copyIconSolid}}
					onMouseOut = {e => {e.currentTarget.src = copyIconBorder}}
					onClick = {copyOnClipborad}
				/>
			</div>
			<div className="joke__btn-container__btn">
				<img 
					src={ joke.favorite ? starIconSolid : starIconBorder} 
					alt="copy icon"
					onClick={() => {markFavoriteJoke()}}
					onMouseOver={e => {e.currentTarget.src = starIconSolid}}
					onMouseOut = {e => { 
						e.currentTarget.src = joke.favorite ? starIconSolid : starIconBorder
					}}
				/>
			</div>
		</div>
	</div>
  )
}
