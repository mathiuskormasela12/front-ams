// ========== Card
// import all modules
import React, { Fragment } from 'react';

// import all components
import {
	Container
} from '../';

// import styles
import styled from './style.module.scss';

export function Card(props) {
	return (
		<Fragment>
			<div className={styled['card-component']}>
				<div className={styled.card}>
					<Container width={90}>
						<header className={styled['card-header']}>
							<h4 className={styled.title}>{ props.title }</h4>
						</header>
						<main className={styled['card-content']}>
							<div className={styled.diagram}>
								{
									[...Array(8)].map((item, index) => (
										<Fragment key={String(index)}>
											<span className={`${styled[`bar-${index + 1}`]} ${(props.color === 'green') && styled['green-bar']} ${(props.color === 'purple') && styled['purple-bar']} ${(props.color === 'blue') && styled['blue-bar']}`}></span>
										</Fragment>
									))
								}
							</div>
							<div className={`${styled.count} ${(props.color === 'green') && styled['green-text']} ${(props.color === 'purple') && styled['purple-text']} ${(props.color === 'blue') && styled['blue-text']}`}>
								<h6>80</h6>
							</div>
						</main>
					</Container>
				</div>
			</div>
		</Fragment>
	);
}