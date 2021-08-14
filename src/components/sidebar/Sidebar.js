// ========== Sidebar
// import all modules
import React, { Fragment } from 'react';

// import style
import styled from './style.module.scss';

export function Sidebar(props) {
	return (
		<Fragment>
			<div className={styled.sidebar}>
				<aside className={styled.aside}>
					{ props.children }
				</aside>
			</div>
		</Fragment>
	);
}