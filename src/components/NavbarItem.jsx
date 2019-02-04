import React from 'react';
import classNames from 'classnames';

const NavbarItem = ({title, item, selectMode}) => {

	const linkClasses = classNames("navbar__link", {"navbar__link--selected": item.selected});

	const changeMode = (e) => {
		e.preventDefault();

		if(item.link){
			 window.open(item.link);
		}

		selectMode(title);
		};

  return (
    <li className="navbar__item">
      <a href={item.link} onClick={changeMode} className={linkClasses}>
        {title}
      </a>
    </li>
  );
};

export default NavbarItem;
