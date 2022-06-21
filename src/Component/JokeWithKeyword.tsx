import React from 'react'
import interests from '../Data/interests'

export default function JokeWithKeyword() {
  return (
	<section>
		<form>
			<div className="keyword">
				<p>Keyword</p>
				<input type='text' />
				<input type="text" />
			</div>
			<div>
				<div>Choose interests</div>
				<div>
					{ Object.values(interests).map( keyword => (
						<p>{keyword}</p>
					))}
				</div>
			</div>
		</form>
		<div>
			<h2>Generate joke with keyword and their interests</h2>
			<h3>Keyword:</h3>
			<p>Keyword will be included in jokes. this is optional(maxmam 2 words)</p>
			<h3>Interests:</h3>
			<p>This is category of jokes that will be generate. Recommend pick one from person's profile that you will use a joke. this is required </p>
		</div>
	</section>
  )
}
