import React from 'react';

import Header from './Header.jsx';
import Navbar from './Navbar.jsx'

class App extends React.Component {
	state = {
		showInfo: false
	};

	getInfo = () => {
		const state = {...this.state};

		state.showInfo = true;
		this.setState(state);
	}

  render() {
    return (
      <div>
        <Header title="Alfie Collins" button="Get Info" getInfo={this.getInfo}/>
        <Navbar showInfo={this.state.showInfo} />
      </div>
    );
  }
}

export default App;