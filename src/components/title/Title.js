// ========== Title
// import all modules
import React, { Fragment } from 'react';

// import style
import styled from './style.module.scss';

export function Title(props) {
	return (
		<Fragment>
			<h1 className={styled.title} {...props}>{ props.children }</h1>
		</Fragment>
	);
}