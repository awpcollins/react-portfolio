import React from 'react';

import Header from './Header.jsx';
import Navbar from './Navbar.jsx'
import Intro from './Intro.jsx';

class App extends React.Component {
	state = {
		selectedView : {
			intro: false,
			github: false,
			examples: false,
			more: false
		}
	};

	getInfo = () => {
		const state = {...this.state};

		state.selectedView.intro = true;
		this.setState(state);
	}

  render() {
    return (
      <div>
        <Header title="Alfie Collins" button="Get Info" getInfo={this.getInfo}/>
        <Navbar selectedView={this.state.selectedView} />
								<Intro selectedView={this.state.selectedView} />
      </div>
    );
  }
}

export default App;