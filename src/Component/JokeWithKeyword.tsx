import React from 'react'
import interests from '../Data/interests'

export default function JokeWithKeyword() {
  return (
	<section className='MAIN-SECTION jokes'>
		<form className='MAIN-SECTION__CONTENT jokes__form'>
			<div className="jokes__form__keyword">
				<p>Keyword</p>
				<input type='text' />
				<input type="text" />
			</div>
			<div className='jokes__form__interests'>
				<div>Choose interests</div>
				<div>
					{ Object.values(interests).map( keyword => (
						<p>{keyword}</p>
					))}
				</div>
			</div>
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
