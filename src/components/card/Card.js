// ========== Card
// import all modules
import React, { Fragment } from 'react';

// import all components
import {
	Container
} from '../';

// import styles
import styled from './style.module.scss';

export function Card(props) {
	return (
		<Fragment>
			<div className={styled['card-component']}>
				<div className={styled.card}>
					<Container width={90}>
						<header className={styled['card-header']}>
							<h4 className={styled.title}>{ props.title }</h4>
						</header>
					</Container>
				</div>
			</div>
		</Fragment>
	);
}