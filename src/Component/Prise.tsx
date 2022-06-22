import React from 'react'

export default function Prise() {
  return (
	<section className='MAIN-SECTION'>
    	<form className='MAIN-SECTION__CONTENT'>
			<p className="MAIN-SECTION__CONTENT-FORM__LABEL">Name</p>
			<input 
				type='text'
				className="MAIN-SECTION__CONTENT-FORM__INPUT"
				placeholder='Name is required'
				required
			/>
			<p className="MAIN-SECTION__CONTENT-FORM__LABEL">Sentence</p>
			<textarea
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
		<div className='MAIN-SECTION__CONTENT'>
		<h2  className='MAIN-SECTION__CONTENT__TITLE'>Generate mega praise of a person</h2>
			<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Name:</h3>
			<p className='MAIN-SECTION__CONTENT__P'>Name of person or name you call the person</p>
			<h3 className='MAIN-SECTION__CONTENT__SUBTITLE'>Sentence:</h3>
			<p className='MAIN-SECTION__CONTENT__P'>
				Sentence will be included in a praise. You should input something you want to say good about 
      		</p>
		</div>
  </section>
  )
}