// ========== Dashboard
// import all modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

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
	CardHeader,
	DataTable
} from '../components';

// import all actions
import { setStudent, setLoading } from '../redux/action/student';

class Dashboard extends Component {
	componentDidMount() {
		document.title = 'Ams | Dashboard';

		const data = [
			{
				id: 1,
				student_name: 'Mathius Kormasela',
				nisn: '10250',
				class: 'XII - RPL',
				birthday: 'Jakarta, 04 Oktober 2002',
				photo: 'http://localhost/public/photo.png',
				report: 'http://localhost/public/photo.png',
			},
			{
				id: 2,
				student_name: 'Rizki Ramadhan',
				nisn: '10266',
				class: 'XII - RPL',
				birthday: 'Jakarta, 05 November 2002',
				photo: 'http://localhost/public/photo.png',
				report: 'http://localhost/public/photo.png',
			},
			{
				id: 3,
				student_name: 'Fadhli Fadhilah',
				nisn: '10232',
				class: 'XII - RPL',
				birthday: 'Jakarta, 21 February 2002',
				photo: 'http://localhost/public/photo.png',
				report: 'http://localhost/public/photo.png',
			},
			{
				id: 4,
				student_name: 'Riza Fahmi',
				nisn: '10232',
				class: 'XII - RPL',
				birthday: 'Jakarta, 21 February 2002',
				photo: 'http://localhost/public/photo.png',
				report: 'http://localhost/public/photo.png',
			},
			{
				id: 5,
				student_name: 'Fadhli Fadhilah',
				nisn: '10232',
				class: 'XII - RPL',
				birthday: 'Jakarta, 21 February 2002',
				photo: 'http://localhost/public/photo.png',
				report: 'http://localhost/public/photo.png',
			}
		];
		
		this.props.setLoading();
		setTimeout(() => {
			this.props.setStudent(data);
			this.props.setLoading();
		}, 3000)

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
															<DataTable {...this.props} />
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

const mapDispatchToProps = {
	setStudent,
	setLoading
}

export default connect(null, mapDispatchToProps)(Dashboard);