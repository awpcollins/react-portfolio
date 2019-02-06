import React from 'react'

const TechItem = ({item, title}) => {

	const goToProjects = (e) => {
		e.preventDefault()

		if(item.link){
			window.open(item.link)
		}
	}

	return (
		<button className='tech-item' onClick={goToProjects}>
			{title}
		</button>
	)
}

export default TechItem