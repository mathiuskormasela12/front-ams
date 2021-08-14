// ========== Container
// import all modules
import React, { Fragment } from 'react';

// import style
import styled from './style.module.scss';

export function Container(props) {
	return (
		<Fragment>
			<div className={styled['container']}>
				<div 
					className={`
						${props.fluid && styled.fluid} 
						${!props.fluid && styled['normal-container']} 
						${props.inheritWidth && styled['inherit-width']}
						${props.inheritHeight && styled['inherit-height']}
					`}
					style={{
						width: `${props.width}%`
					}}
				>
					{ props.children }
				</div>
			</div>
		</Fragment>
	)
}