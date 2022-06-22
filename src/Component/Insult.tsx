import React, { useState, useContext} from 'react'
import axios from '../Apis/axios'
import request from '../Apis/Request'
import { HistoryJokesContext, JokeModel, TalkResponseModel } from '../App'
import Joke from './Joke'
import sampleData from '../Apis/sampleResponse'

export default function Insult() {

	const { setJokesHistory } = useContext(HistoryJokesContext)

	const [nameState, setNameState] = useState("")
	const [sentence, setSentence] = useState("")
	const [insultResult, setInsultResult] = useState<JokeModel>({phrase: "", favorite: false})
	const [isSearched, setIsSearched] = useState(false)

	async function getInsult(e: React.SyntheticEvent) {
		e.preventDefault()
		const params: URLSearchParams = new URLSearchParams([
			['name', nameState],
			['content', sentence]
		])

		setIsSearched(true)

		try{
			const insult: TalkResponseModel = await axios.get(request.fetchInsult, { params })
			setInsultResult(()=>(
				{phrase: insult.text, favorite: false}
			))
		}catch(e){
			console.log(e)
			setInsultResult(()=>(
				{phrase: sampleData.insult.text, favorite: false}
			))
		}
	}

  return (
    <section className='MAIN-SECTION'>
    	<form onSubmit={getInsult} className='MAIN-SECTION__CONTENT'>
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
			<Joke joke={insultResult} setJokeHistory={ setJokesHistory } />
			:
			<div className='MAIN-SECTION__CONTENT'>
				<h2  className='MAIN-SECTION__CONTENT__TITLE'>Generate insult phrase of a person</h2>
				<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Name:</h3>
				<p className='MAIN-SECTION__CONTENT__P'>Name of person or name you call the person</p>
				<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Sentence:</h3>
				<p className='MAIN-SECTION__CONTENT__P'>
				Sentence will be included in a insult phrase. You should input something you want to say bad about 
				</p>
		 	 </div>
		}
</section>
)}
