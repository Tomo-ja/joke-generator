import React from 'react'
import PropTypes, { InferProps } from 'prop-types'


export default function Tabbar({ pageIndex, setPageIndex }: InferProps<typeof Tabbar.propTypes>) {

	const tabTitles = ["Joke related profile", "Mage praise", "Insult", "History"]

  return (
	<nav className='tabbar'>
		<ul className='tabbar__list'>
			{ tabTitles.map((title, index) => {
				const className = pageIndex === index ? "tabbar__list__item-active" : "tabbar__list__item"
				return <li 
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