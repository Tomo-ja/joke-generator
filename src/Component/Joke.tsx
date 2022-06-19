import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

export default function Joke ({ phrase }: InferProps<typeof Joke.propTypes>) {
  return (
	<div className='joke'>
		<p className='joke__phrase'>{phrase}</p>
		
	</div>
  )
}

Joke.propTypes = {
	phrase: PropTypes.string.isRequired
}