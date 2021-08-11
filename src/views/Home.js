// ========== Home
// import all modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setToken } from '../redux/action/auth';
import { setToggle } from '../redux/action/toggle';

// import all components
import { Title } from '../components';

class Home extends Component {
	constructor(props) {
		super(props);

		this.setToken = this.setToken.bind(this);
		this.setToggle = this.setToggle.bind(this);
	}

	componentDidMount() {
		document.title = 'Ams | Home';
	}

	setToken() {		
		this.props.setToken()
	}

	setToggle() {
		this.props.setToggle()
	}
	
	render() {
		return (
			<Fragment>
				<Title onClick={this.setToken}>Home</Title>
				{ this.props.auth.token && <p>Hello</p> }
				<button type="button" onClick={this.setToggle}>
					Click Me ({this.props.toggle.toggle ? 'On' : 'Off'})
				</button>
			</Fragment>
		);
	}
}

const mapStateToProps = (states) => ({
	...states
})

const mapDispatchToProps = {
	setToken,
	setToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);