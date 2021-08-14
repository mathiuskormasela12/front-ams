// ========== Home
// import all modules
import React, { Component, Fragment } from 'react';

// import all components
import { 
	Container,
	Sidebar,
	Navbar,
	Hero,
	NavbarHorizontal
} from '../components';

class Home extends Component {
	componentDidMount() {
		document.title = 'Ams | Home';
		console.log(process.env.REACT_APP_API_URL);
	}
	
	render() {
		return (
			<Fragment>
				<Hero>
					<Container fluid>
						<Navbar />
						<Sidebar>
							<Container fluid>
								<NavbarHorizontal />
							</Container>
						</Sidebar>
					</Container>
				</Hero>
			</Fragment>
		);
	}
}

export default Home;