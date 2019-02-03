import React from "react";
import NavbarItem from "./NavbarItem.jsx";
import classNames from "classnames";

class Navbar extends React.Component {
  render() {
    const modes = this.props.modes;
    const classes = classNames(
      "navbar",
      {hidden: !modes.intro.selected},
      {"navbar--animation": modes.intro.selected}
    );

    return (
      <nav className={classes}>
        <div className="container navbar">
          <ul className="navbar__list">
            {Object.keys(modes).map(key => (
              <NavbarItem key={key} title={key} item={modes[key]} />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
