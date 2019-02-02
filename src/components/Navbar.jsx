import React from "react";
import NavbarItem from "./NavbarItem.jsx";
import classNames from "classnames";

class Navbar extends React.Component {
  items = [
    {
      title: "Intro",
      link: ""
    },
    {
      title: "Github",
      link: "https://github.com/awpcollins"
    },
    {
      title: "Examples",
      link: ""
    },
    {
      title: "More",
      link: ""
    }
  ];

  render() {
    const classes = classNames(
      "navbar",
      {hidden: !this.props.showInfo},
      {"navbar-animation": this.props.showInfo}
    );

    return (
      <nav className={classes}>
        <div className="navbar__container">
          <ul className="navbar__list">
            {this.items.map((item, index) => (
              <NavbarItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
