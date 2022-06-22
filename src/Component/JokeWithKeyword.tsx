import React, { useState, useEffect,  useRef } from 'react'
import Interests from './Interests'


export default function JokeWithKeyword() {

	const [isInterestSelectorOpen, setIsInterestSelectorOpen] = useState(false)
	const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined)
	const [inputFieldValue, setInputFieldValue] = useState<string | undefined>(undefined)

	const interestInputEl = useRef<HTMLInputElement | null>(null)

	useEffect(()=> {
		if((interestInputEl !== null) && (selectedInterest !== undefined)){
			interestInputEl.current!.value = selectedInterest
			setInputFieldValue(interestInputEl.current!.value)
		}	
	}, [selectedInterest])

  return (
	<section className='MAIN-SECTION jokes'>
		<form className='MAIN-SECTION__CONTENT MAIN-SECTION__CONTENT-FORM '>
			<p className="MAIN-SECTION__CONTENT-FORM__LABEL">Keyword</p>
			<input 
				type='text'
				className="MAIN-SECTION__CONTENT-FORM__INPUT"
				placeholder='keyword 1 required'
				required
			/>
			<input
				type="text"
				className="MAIN-SECTION__CONTENT-FORM__INPUT"
				placeholder='keyword 2 optional'
			/>
			<p className='MAIN-SECTION__CONTENT-FORM__LABEL'>Interest</p>
			<div className='jokes__form__interests'>
			<input
				type="text"
				className="MAIN-SECTION__CONTENT-FORM__INPUT"
				placeholder='Choose one interest'
				ref={interestInputEl}
				onChange={(e) => {
					setInputFieldValue(e.target.value)
				}}
				onFocus = {()=> {setIsInterestSelectorOpen(true)}}
				// bug when is active buttion
				// onBlur = {() => {setIsInterestSelectorOpen(false)}}
				required
			/>
			{ isInterestSelectorOpen && 
				<Interests 
					setModelState={setIsInterestSelectorOpen}
					setInterest = {setSelectedInterest}
					typedOnInputField = {inputFieldValue}
				/>
			}
			</div>
			<button
				className="MAIN-SECTION__CONTENT-FORM__SUBMIT"
			>
				Generate
			</button>
		</form>
		<div className='MAIN-SECTION__CONTENT jokes__explain'>
			<h2  className='MAIN-SECTION__CONTENT__TITLE'>Generate joke with keyword and their interests</h2>
			<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Keyword:</h3>
			<p className='MAIN-SECTION__CONTENT__P'>Keyword will be included in jokes. this is optional (maxmam 2 words)</p>
			<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Interests:</h3>
			<p className='MAIN-SECTION__CONTENT__P'>This is category of jokes that will be generate. Recommend pick one from person's profile that you will use a joke. this is required </p>
		</div>
	</section>
  )
}
