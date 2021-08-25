// ========== WhiteCard
// import all modules
import React, { Fragment } from 'react';

// import styles
import styled from './style.module.scss';

export function WhiteCard(props) {
	return (
		<Fragment>
			<div className={styled.card}>
				{ props.children }
			</div>
		</Fragment>
	);
}