// ========== Navbar
// import all modules
import React, { Fragment } from 'react';
import { 
	FaRegClock, 
	FaSignOutAlt, 
	FaUserAlt, 
	FaUserGraduate, 
	FaUserPlus 
} from 'react-icons/fa';
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
								<Link to="/" className={styled.link}>
									<FaRegClock className={styled.icon} />
									<span className={styled['link-text']}>Dashboard</span>
								</Link>
							</li>
							<li className={`${styled['nav-items']} ${(props.active === 'profile') && styled.active}`}>
								<Link to="/profile" className={styled.link}>
									<FaUserAlt className={styled.icon} />
									<span className={styled['link-text']}>Profile</span>
								</Link>
							</li>
							<li className={`${styled['nav-items']} ${(props.active === 'add-student') && styled.active}`}>
								<Link to="/student/add" className={styled.link}>
									<FaUserGraduate className={styled.icon} />
									<span className={styled['link-text']}>Add Student</span>
								</Link>
							</li>
							<li className={`${styled['nav-items']} ${(props.active === 'add-user') && styled.active}`}>
								<Link to="/user/add" className={styled.link}>
									<FaUserPlus className={styled.icon} />
									<span className={styled['link-text']}>Add User</span>
								</Link>
							</li>
							<li className={styled['nav-items']}>
								<Link to="/logout" className={styled.link}>
									<FaSignOutAlt className={styled.icon} />
									<span className={styled['link-text']}>Logout</span>
								</Link>
							</li>
						</ul>
					</Container>
				</nav>
			</div>
		</Fragment>
	);
}