import React from 'react';
import classNames from 'classnames'

const Intro = ({selectedView}) => {
  const text =
    "A masters degree level educated software engineer with experience working in multiple agile development teams and utilising a wide range of technologies.";

		const classes = classNames(
      "container intro",
      {hidden: !selectedView.intro},
      {"intro--animation": selectedView.intro}
    );

  return <div className={classes}>{text}</div>;
};

export default Intro;
