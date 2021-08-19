// ========== Col
// import all modules
import React, { Fragment } from 'react';

// import styles
import styled from './style.module.scss';

export function Col(props) {
	return (
		<Fragment>
			<div 
				className={`
					${props.xl && styled[`col-xl-${props.xl}`]}
					${props.lg && styled[`col-lg-${props.lg}`]}
					${props.sm && styled[`col-sm-${props.sm}`]}
					${props.xs && styled[`col-xs-${props.xs}`]}
				`}
			>
				{ props.children }
			</div>
		</Fragment>
	);
}