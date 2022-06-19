import React, { useState } from 'react'
import Tabbar from './Tabbar'
import JokeWithKeyword from './JokeWithKeyword'
import Prise from './Prise'
import Insult from './Insult'
import History from './History'

export default function Main() {

	const [pageIndex, setPageIndex] = useState(0)

	const contentsComponents = [
		<JokeWithKeyword />,
		<Prise />,
		<Insult />,
		<History />
	]

  return (
	<main className='main'>
		<Tabbar pageIndex={ pageIndex } setPageIndex = { setPageIndex }/>
		{ contentsComponents[pageIndex]}
	</main>
  )
}
