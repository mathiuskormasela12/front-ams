// ========== DashboardContent
// import all modules
import React, { Fragment } from 'react';

// define styles
const styled = {
	'padding': '1.5rem 0'
}

export function DashboardContent(props) {
	return (
		<Fragment>
			<div style={styled}>
				{ props.children }
			</div>
		</Fragment>
	);
}