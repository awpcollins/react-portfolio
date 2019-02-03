import React from 'react';
import NavbarItem from './NavbarItem.jsx';
import classNames from 'classnames';

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
			console.log(this.props.selectedView);
    const classes = classNames(
      "navbar",
      {hidden: !this.props.selectedView.intro},
      {"navbar--animation": this.props.selectedView.intro}
    );

    return (
      <nav className={classes}>
        <div className="container navbar">
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
