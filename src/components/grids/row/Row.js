// ========== Row
// import all modules
import React, { Fragment } from 'react';

// import styles
import styled from './style.module.scss';

export function Row(props) {
	return (
		<Fragment>
			<div className={styled.row}>
				{ props.children }
			</div>
		</Fragment>
	);
}