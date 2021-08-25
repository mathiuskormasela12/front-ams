// ========== HeroTable
// import all modules
import React, { Fragment } from 'react';

// import styles
import styled from './style.module.scss';

export function HeroTable(props) {
	return (
		<Fragment>
			<div className={styled['hero-table']}>
				{ props.children }
			</div>
		</Fragment>
	);
}