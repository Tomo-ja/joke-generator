import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import copyIconSolid from '../images/icon_copy_solid.svg'

export default function Joke ({ phrase }: InferProps<typeof Joke.propTypes>) {
  return (
	<div className='joke'>
		<p className='joke__phrase'>{phrase}</p>
		<img src={copyIconSolid} />
	</div>
  )
}

Joke.propTypes = {
	phrase: PropTypes.string.isRequired
}