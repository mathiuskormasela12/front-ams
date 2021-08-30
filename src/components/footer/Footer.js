// ========= Footer
// import all modules
import React, { Fragment } from 'react';

// import all components
import {
	Container
} from '../';

// import styled
import styled from './style.module.scss';

export function Footer() {
	return (
		<Fragment>
			<footer className={styled.footer}>
				<Container width={80}>
					<p className={styled['footer-text']}>Developed by Mathius Kormasela &copy; 2021 </p>
				</Container>
			</footer>
		</Fragment>
	);
}