import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from '../Apis/axios'
import request from '../Apis/Request'
import { HistoryJokesContext, JokeModel, JokeResponseModel } from '../App'
import Interests from './Interests'
import Joke from './Joke'
import sampleData from '../Apis/sampleResponse'


export default function JokeWithKeyword() {

	const { setJokesHistory } = useContext(HistoryJokesContext)

	const [isInterestSelectorOpen, setIsInterestSelectorOpen] = useState(false)
	const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined)
	const [inputFieldValue, setInputFieldValue] = useState<string | undefined>(undefined)
	const [jokesResult, setJokeResult] = useState<JokeModel[]>([])
	const [isSearched, setIsSearched] = useState(false)

	const keyword1InputEl = useRef<HTMLInputElement | null>(null)
	const keyword2InputEl = useRef<HTMLInputElement | null>(null)
	const interestInputEl = useRef<HTMLInputElement | null>(null)

	async function getJokesWithKeyword(e: React.SyntheticEvent){
		e.preventDefault()
		let keyword: string
		if (keyword2InputEl.current!.value !== undefined){
			keyword = keyword1InputEl.current!.value + ',' + keyword2InputEl.current!.value
		}else{
			keyword = keyword1InputEl.current!.value
		}
		const params: URLSearchParams = new URLSearchParams([
			["keywords", keyword],
			["numJokes", '5'],
			// どんなカテゴリーがあるのかわからない
			// ['category', interestInputEl.current!.value],
			["minRating", '5']
		])
		try{
			const jokes = await axios.get(request.fetchJokeWithKeyword, { params })
			console.log(jokes.data)
			setJokeResult(() => (
				Object.values<JokeResponseModel>(jokes.data).map( result => ({phrase: result.joke, favorite: false}))
			))
			setIsSearched(true)
		}catch(e){
			setJokeResult(()=> ([
				{phrase: sampleData.long.text, favorite: false},
				{phrase: sampleData.long.text, favorite: false},
				{phrase: sampleData.long.text, favorite: false}
			]))
			setIsSearched(true)
			console.log(e)
		}
	}

	useEffect(()=> {
		if((interestInputEl !== null) && (selectedInterest !== undefined)){
			interestInputEl.current!.value = selectedInterest
			setInputFieldValue(interestInputEl.current!.value)
		}	
	}, [selectedInterest])

  return (
	<section className='MAIN-SECTION jokes'>
		<form onSubmit={getJokesWithKeyword} className='MAIN-SECTION__CONTENT MAIN-SECTION__CONTENT-FORM '>
			<p className="MAIN-SECTION__CONTENT-FORM__LABEL">Keyword</p>
			<input 
				ref={keyword1InputEl}
				type='text'
				className="MAIN-SECTION__CONTENT-FORM__INPUT"
				placeholder='keyword 1 required'
				required
			/>
			<input
				ref={keyword2InputEl}
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
		{ isSearched ?
			<div className='MAIN-SECTION__CONTENT'>
				{jokesResult.map(joke => <Joke joke={joke} setJokeHistory={setJokesHistory} />)}
			</div> 
			:
			<div className='MAIN-SECTION__CONTENT jokes__explain'>
				<h2  className='MAIN-SECTION__CONTENT__TITLE'>Generate joke with keyword and their interests</h2>
				<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Keyword:</h3>
				<p className='MAIN-SECTION__CONTENT__P'>Keyword will be included in jokes. this is optional (maxmam 2 words) no space</p>
				<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Interests:</h3>
				<p className='MAIN-SECTION__CONTENT__P'>This is category of jokes that will be generate. Recommend pick one from person's profile that you will use a joke. this is required </p>
			</div>
		}
	</section>
  )
}
