import React from 'react'
import { JokeModel } from '../App'
import copyIconSolid from '../images/icon_copy_solid.svg'
import copyIconBorder from '../images/icon_copy_border.svg'
import starIconSolid from '../images/icon_star_solid.svg'
import starIconBorder from '../images/icon_star_border.svg'

interface JokeProps{
	joke: JokeModel
}

export default function Joke ({ joke }: JokeProps) {

	function copyOnClipborad(){
		navigator.clipboard.writeText(joke.phrase)
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
					src={starIconBorder} 
					alt="copy icon"
					onMouseOver={e => {e.currentTarget.src = starIconSolid}}
					onMouseOut = {e => {e.currentTarget.src = starIconBorder}}
				/>
			</div>
		</div>
	</div>
  )
}
