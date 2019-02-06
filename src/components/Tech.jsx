import React from 'react'
import classNames from 'classnames'

import TechItem from './TechItem.jsx'

const Tech = ({modes}) => {
	const classes = classNames('container tech', {
		hidden: !modes.technologies.selected
	})

	const technologies = {
		PHP: {
			link:
        'https://github.com/awpcollins?utf8=%E2%9C%93&tab=repositories&q=&type=&language=php'
		},
		Javascript: {
			link:
        'https://github.com/awpcollins?utf8=%E2%9C%93&tab=repositories&q=&type=&language=javascript'
		},
		Go: {
			link:
        'https://github.com/awpcollins?utf8=%E2%9C%93&tab=repositories&q=&type=&language=go'
		},
		CSS: {
			link:
        'https://github.com/awpcollins?utf8=%E2%9C%93&tab=repositories&q=&type=&language=css'
		}
	}

	return (
		<div className={classes}>
			<ul className='tech__list'>
				{Object.keys(technologies).map(key => (
					<TechItem key={key} title={key} item={technologies[key]} />
				))}
			</ul>
		</div>
	)
}

export default Tech
