import React, { useState } from 'react'
import Tabbar from './Tabbar'

export default function Main() {

	const [pageIndex, setPageIndex] = useState(0)

  return (
	<main className='main'>
		<Tabbar pageIndex={ pageIndex } setPageIndex = { setPageIndex }/>
	</main>
  )
}
