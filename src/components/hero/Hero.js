// ========== Hero
// import all modules
import React, { Fragment } from 'react';

// import style
import styled from './style.module.scss';

export function Hero(props) {
	return (
		<Fragment>
			<div className={styled.hero}>
				<div className={styled['hero-style']}>
					{ props.children }
				</div>
			</div>
		</Fragment>
	);
}