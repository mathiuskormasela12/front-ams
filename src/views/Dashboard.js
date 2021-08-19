// ========== Home
// import all modules
import React, { Component, Fragment } from 'react';

// import all components
import { 
	Container,
	Sidebar,
	Navbar,
	Hero,
	NavbarHorizontal,
	DashboardContent,
	Row,
	Col,
	Card
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
								<DashboardContent>
									<Container width={95}>
										<Row>
											<Col xl={4} lg={4} sm={12}>
												<Card title="Total Students" />
											</Col>
											<Col xl={4} lg={4} sm={12}>
												<Card title="Total Users" />
											</Col>
											<Col xl={4} lg={4} sm={12}>
												<Card title="Total Majors" />
											</Col>
										</Row>
									</Container>
								</DashboardContent>
							</Container>
						</Sidebar>
					</Container>
				</Hero>
			</Fragment>
		);
	}
}

export default Dashboard;