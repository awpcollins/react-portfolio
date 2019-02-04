import React from "react";

import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Intro from "./Intro.jsx";

class App extends React.Component {
  state = {
    showNav: false,
    modes: {
      intro: {
        selected: false,
        link: ""
      },
      technologies: {
        selected: false,
        link: ""
      },
      github: {
        selected: false,
        link: "https://github.com/awpcollins"
      },
      more: {
        selected: false,
        link: ""
      }
    }
  };

  selectMode = item => {
    const state = {...this.state};

    this.resetModes(state.modes);
    state.modes[item].selected = true;
    this.setState(state);
  };

  resetModes = modes => {
    Object.keys(modes).forEach(key => {
        modes[key].selected = false;
    });
  };

  getInfo = () => {
    const state = {...this.state};
    state.showNav = true;

    this.setState(state);
  };

  render() {
    return (
      <div>
        <Header
          title="Alfie Collins"
          button="Get Info"
          getInfo={this.getInfo}
        />
        <Navbar
          showNav={this.state.showNav}
          modes={this.state.modes}
          selectMode={this.selectMode}
        />
        <Intro modes={this.state.modes} />
      </div>
    );
  }
}

export default App;
