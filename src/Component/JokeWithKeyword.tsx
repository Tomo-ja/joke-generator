import React from 'react'
import interests from '../Data/interests'

export default function JokeWithKeyword() {
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
			<p className='MAIN-SECTION__CONTENT-FORM__LABEL'>Choose interests</p>
			<div className='jokes__form__interests'>
			<input
				type="text"
				className="MAIN-SECTION__CONTENT-FORM__INPUT"
				placeholder='Choose one interest'
				required
			/>
				{/* <div>
					{ Object.values(interests).map( keyword => (
						<p>{keyword}</p>
					))}
				</div> */}
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
