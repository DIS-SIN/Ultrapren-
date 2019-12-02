import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../actions/main-actions';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
	}
	
	onUserLogin = (e) => {
		e.preventDefault();
		this.props.onUserLogin({ username: 'johnp', fullName: 'John Prentice', businessLine: 'Special Advisor' });
		this.setState({ redirect: true });
	}
	
	render() {
		if (this.state.redirect) {
			return <Redirect exact to="/home"/>;
		}
		return (
			<div id="login">
				<h1>Log in to Ultrapren</h1>
				<form id="login-form" onSubmit={this.onUserLogin}>
					<div className="form-group">
						<input type="text" className="form-control" id="username" placeholder="Username" required />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password" placeholder="Password" required />
					</div>
					<input type="submit" value="Log in" className="btn btn-primary" />
				</form>
			</div>
		);
	}
}

// Add Redux to component
const mapStateToProps = (state) => {
	return {};
}
const mapActionsToProps = {
	onUserLogin: userLogin
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
