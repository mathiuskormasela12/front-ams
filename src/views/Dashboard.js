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

class Dashboard extends Component {
	componentDidMount() {
		document.title = 'Ams | Dashboard';
	}
	
	render() {
		return (
			<Fragment>
				<Hero>
					<Container fluid>
						<Navbar active="dashboard" />
						<Sidebar>
							<Container fluid>
								<NavbarHorizontal title="Dashboard" show/>
							</Container>
						</Sidebar>
					</Container>
				</Hero>
			</Fragment>
		);
	}
}

export default Dashboard;