// ========== Container
// import all modules
import React, { Fragment } from 'react';

// import style
import styled from './style.module.scss';

export function Container(props) {
	return (
		<Fragment>
			<div className={props.fluid ? [styled['container-fluid']] : styled.container}>
				{ props.children }
			</div>
		</Fragment>
	)
}