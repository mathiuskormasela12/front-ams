// ========== Navbar
// import all modules
import React, { Fragment } from 'react';
import { FaRegClock, FaSignOutAlt, FaUserAlt, FaUserGraduate, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import all components
import {
	Container
} from '../';

// import style
import styled from './style.module.scss';

// import static files
import logo from '../../assets/img/logo12.png';

export function Navbar(props) {
	return (
		<Fragment>
			<div className={styled.navbar}>
				<nav className={styled.nav}>
					<Container fluid>
						<div className={styled.header}>
							<figure className={styled.figure}>
								<img src={logo} alt="Logo 12" className={styled.img} />
								<figcaption className={styled.figcaption}>
									<span className={styled.bold}>dubes</span>
									admin
								</figcaption>
							</figure>
						</div>
						<ul className={styled['nav-list']}>
							<li className={`${styled['nav-items']} ${(props.active === 'dashboard') && styled.active}`}>
								<FaRegClock className={styled.icon} />
								<Link to="/" className={styled.link}>
									Dashboard
								</Link>
							</li>
							<li className={`${styled['nav-items']} ${(props.active === 'profile') && styled.active}`}>
								<FaUserAlt className={styled.icon} />
								<Link to="/profile" className={styled.link}>
									Profile
								</Link>
							</li>
							<li className={`${styled['nav-items']} ${(props.active === 'add-student') && styled.active}`}>
								<FaUserGraduate className={styled.icon} />
								<Link to="/student/add" className={styled.link}>
									Add Student
								</Link>
							</li>
							<li className={`${styled['nav-items']} ${(props.active === 'add-user') && styled.active}`}>
								<FaUserPlus className={styled.icon} />
								<Link to="/user/add" className={styled.link}>
									Add User
								</Link>
							</li>
							<li className={styled['nav-items']}>
								<FaSignOutAlt className={styled.icon} />
								<Link to="/logout" className={styled.link}>
									Logout
								</Link>
							</li>
						</ul>
					</Container>
				</nav>
			</div>
		</Fragment>
	);
}