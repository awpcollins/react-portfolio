import React from "react";

const NavbarItem = ({item}) => {
  return (
    <li className="navbar__item">
      <a href={item.link} className="navbar__link">
        {item.title}
      </a>
    </li>
  );
};

export default NavbarItem;
