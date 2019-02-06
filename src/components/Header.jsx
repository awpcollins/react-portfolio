import React from 'react'

const Header = ({title, button, getInfo}) => {
	return (
		<header className='container header'>
			<h2 className='title'>{title}</h2>
			<button onClick={getInfo} className='button button-primary header__button'>
				{button}
			</button>
		</header>
	)
}

export default Header