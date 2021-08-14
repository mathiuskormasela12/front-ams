// ========== Home
// import all modules
import React, { Component, Fragment } from 'react';

// import all components
import { Container } from '../components';

class Home extends Component {
	componentDidMount() {
		document.title = 'Ams | Home';
	}
	
	render() {
		return (
			<Fragment>
				<Container>
					<h1>Hello</h1>
				</Container>
			</Fragment>
		);
	}
}

export default Home;