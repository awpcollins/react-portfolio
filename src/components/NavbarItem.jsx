import React from 'react';
import classNames from 'classnames';

const NavbarItem = ({title, item}) => {

	const linkClasses = classNames("navbar__link", {"navbar__link--selected": item.selected});

  return (
    <li className="navbar__item">
      <a href={item.link} className={linkClasses}>
        {title}
      </a>
    </li>
  );
};

export default NavbarItem;
