import React from 'react';

import Header from './Header.jsx';
import Navbar from './Navbar.jsx'
import Intro from './Intro.jsx';

class App extends React.Component {
	state = {
		modes: {
			intro: {
				selected: false,
				link: '',
			},
			github: {
				selected: false,
				link: '',
			},
			examples: {
				selected: false,
				link: '',
			},
			more: {
				selected: false,
				link: '',
			}
		}
	};

	getInfo = () => {
		const state = {...this.state};

		state.modes.intro.selected = true;
		this.setState(state);
	}

  render() {
    return (
      <div>
        <Header title="Alfie Collins" button="Get Info" getInfo={this.getInfo}/>
        <Navbar modes={this.state.modes} />
								<Intro modes={this.state.modes} />
      </div>
    );
  }
}

export default App;