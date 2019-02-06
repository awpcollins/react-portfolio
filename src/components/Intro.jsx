import React from 'react'
import classNames from 'classnames'

const Intro = ({modes}) => {
	const text =
    'A masters degree level educated software engineer with experience working in multiple agile development teams and utilising a wide range of technologies.'

	const classes = classNames(
		'container intro',	
		{hidden: !modes.intro.selected},
		{'intro--animation': modes.intro.selected}
	)

	return <div className={classes}>{text}</div>
}

export default Intro
