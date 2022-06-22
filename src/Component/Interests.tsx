import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import interestsList from '../Data/interests'

export default function Interests({ setModelState, setInterest, typedOnInputField}: InferProps<typeof Interests.propTypes>) {

	let filteredInterestsList = typedOnInputField === undefined ? 
									Object.values(interestsList) : 
									Object.values(interestsList).filter(interest => interest.includes(typedOnInputField!))

  return (
	<div>
		{ filteredInterestsList.map ((interest, index) => (
			<button
				key={index}
				value={interest}
				onClick={(e) => {
					setInterest((e.target as HTMLButtonElement).value)
					setModelState(false)
				}}
			>{interest}
			</button>
		))}
	</div>
  )
}

Interests.propTypes = {
	setModelState: PropTypes.func.isRequired,
	setInterest: PropTypes.func.isRequired,
	typedOnInputField: PropTypes.string
}
