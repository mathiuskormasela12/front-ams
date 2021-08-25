// ========== CardHeader
// import all modules
import React, { Fragment } from 'react';

// import styles
import styled from './style.module.scss';

export function CardHeader(props) {
	return (
		<Fragment>
			<div className={styled['card-header']}>
				<header className={styled.header}>
					<h3 className={styled.title}>{ props.title }</h3>
				</header>
			</div>
		</Fragment>
	);
}