import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import copyIconSolid from '../images/icon_copy_solid.svg'
import copyIconBorder from '../images/icon_copy_border.svg'
import starIconSolid from '../images/icon_star_solid.svg'
import starIconBorder from '../images/icon_star_border.svg'

export default function Joke ({ phrase }: InferProps<typeof Joke.propTypes>) {
  return (
	<div className='joke'>
		<p className='joke__phrase'>{phrase}</p>
		<div className="joke__btn-container">
			<div className="joke__btn-container_btn">
				<img 
					src={copyIconBorder} 
					alt="copy icon"
					onMouseOver={e => {e.currentTarget.src = copyIconSolid}}
					onMouseOut = {e => {e.currentTarget.src = copyIconBorder}}
				/>
			</div>
			<div className="joke__btn-container_btn">
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

Joke.propTypes = {
	phrase: PropTypes.string.isRequired
}