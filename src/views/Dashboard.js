// ========== Dashboard
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
	Card,
	HeroTable,
	WhiteCard,
	CardHeader
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
											<Col xxl={4} xl={4} lg={6} sm={12} xs={12}>
												<Card title="Total Students" color="green" />
											</Col>
											<Col xxl={4} xl={4} lg={6} sm={12} xs={12}>
												<Card title="Total Users" color="purple" />
											</Col>
											<Col xxl={4} xl={4} lg={6} sm={12} xs={12}>
												<Card title="Total Majors" color="blue" />
											</Col>
										</Row>
										<HeroTable>
											<Row>
												<Col xxl={12} xl={12} lg={12} sm={12} xs={12}>
													<WhiteCard>
														<Container width={93}>
															<CardHeader title="Show All Students" />
														</Container>
													</WhiteCard>
												</Col>
											</Row>
										</HeroTable>
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