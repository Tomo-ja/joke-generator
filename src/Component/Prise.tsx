import React, { useState, useContext } from 'react'
import axios from '../Apis/axios'
import request from '../Apis/Request'
import { HistoryJokesContext, JokeModel, TalkResponseModel } from '../App'
import Joke from './Joke'
import sampleData from '../Apis/sampleResponse'

export default function Prise() {

	const { setJokesHistory } = useContext(HistoryJokesContext)

	const [nameState, setNameState] = useState("")
	const [sentence, setSentence] = useState("")
	const [praiseResult, setPraiseResult] = useState<JokeModel>({phrase: "", favorite: false})
	const [isSearched, setIsSearched] = useState(false)

	async function getPraise(e: React.SyntheticEvent) {
		e.preventDefault()
		const params: URLSearchParams = new URLSearchParams([
			['name', nameState],
			['content', sentence]
		])

		setIsSearched(true)

		try{
			const praise: TalkResponseModel = await axios.get(request.fetchPraise, { params })
			setPraiseResult(()=>(
				{phrase: praise.text, favorite: false}
			))
		}catch(e){
			console.log(e)
			setPraiseResult(()=>(
				{phrase: sampleData.praise.text, favorite: false}
			))
		}
	}

  return (
	<section className='MAIN-SECTION'>
    	<form onSubmit={getPraise} className='MAIN-SECTION__CONTENT'>
			<p className="MAIN-SECTION__CONTENT-FORM__LABEL">Name</p>
			<input 
				onChange={e => setNameState(e.target.value)}
				type='text'
				className="MAIN-SECTION__CONTENT-FORM__INPUT"
				placeholder='Name is required'
				required
			/>
			<p className="MAIN-SECTION__CONTENT-FORM__LABEL">Sentence</p>
			<textarea
				onChange={e => setSentence(e.target.value)}
				rows={5}
				className="MAIN-SECTION__CONTENT-FORM__INPUT"
				placeholder='One line sentence is required'
				required
			/>
			<button
				className="MAIN-SECTION__CONTENT-FORM__SUBMIT"
			>
				Generate
			</button>
		</form>
		{ isSearched ? 
				<Joke joke={praiseResult} setJokeHistory={ setJokesHistory } />
				:
				<div className='MAIN-SECTION__CONTENT'>
				<h2  className='MAIN-SECTION__CONTENT__TITLE'>Generate mega praise of a person</h2>
				<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Name:</h3>
				<p className='MAIN-SECTION__CONTENT__P'>Name of person or name you call the person</p>
				<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Sentence:</h3>
				<p className='MAIN-SECTION__CONTENT__P'>
					Sentence will be included in a praise. You should input something you want to say good about 
				</p>
			</div>
			}

  </section>
  )
}