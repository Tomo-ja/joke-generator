import React from 'react'
import PropTypes, { InferProps } from 'prop-types'


export default function Tabbar({ pageIndex, setPageIndex }: InferProps<typeof Tabbar.propTypes>) {

	const tabTitles = ["Joke", "Praise", "Insult", "History"]

  return (
	<nav className='tabbar'>
		<ul className='tabbar__list'>
			{ tabTitles.map((title, index) => {
				const className = pageIndex === index ? "tabbar__list__item-active TABBAR-TITLE" : "tabbar__list__item TABBAR-TITLE"
				return <li 
							key={index}
							className={className}
							onClick = {() => setPageIndex(index)}
						>
							{title}
						</li>
			})}
		</ul>
	</nav>
  )
}

Tabbar.propTypes = {
	pageIndex: PropTypes.number.isRequired,
	setPageIndex: PropTypes.func.isRequired
}