// ========== Navbar
// import all modules
import React, { Fragment, createRef } from 'react';
import { FaSearch } from 'react-icons/fa';

// import style
import styled from './style.module.scss';

export function SearchField(props) {
	const searchRef = createRef();

	const handleFocus = () => {
		searchRef.current.focus()
	}

	return (
		<Fragment>
			<div className={styled['input-search']}>
				<div className={styled.container}>
					<input 
						type="search" 
						ref={searchRef} 
						className={styled.input} 
						{...props} 
					/>
					<FaSearch 
						className={styled.icon} 
						onClick={handleFocus}
					/>
				</div>
			</div>
		</Fragment>
	);
}