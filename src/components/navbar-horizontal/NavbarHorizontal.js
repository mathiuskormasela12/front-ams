// ========== Navbar
// import all modules
import React, { Fragment } from 'react';

// import all components
import {
	Container,
	SearchField
} from '../';

// import style
import styled from './style.module.scss';

// import assets
import user from '../../assets/img/10250.JPG';

export function NavbarHorizontal() {
	return (
		<Fragment>
			<div className={styled['navbar-horizontal']}>
				<nav className={styled['nav-dark']}>
					<Container inheritHeight>
						<ul className={`${styled['nav-list']} ${styled['flex-end']}`}>
							<li className={styled['nav-items']}>
								<SearchField placeholder="Search..." />
							</li>
							<li className={styled['nav-items']}>
								<figure className={styled.figure}>
									<img src={user} alt="User" className={styled.img} />
									<figcaption className={styled.figcaption}>
										Mathius
									</figcaption>
								</figure>
							</li>
						</ul>
					</Container>
				</nav>
				<nav className={styled['nav-light']}>
					<Container inheritHeight width={95}>
						<ul className={styled['nav-list']}>
							<li className={styled['nav-items']}>
								<h6 className={styled.title}>Dashboard</h6>
							</li>
						</ul>
					</Container>
				</nav>
			</div>
		</Fragment>
	);
}