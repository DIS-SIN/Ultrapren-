import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import canada_white_en from '../static/FIPs/canada_white_en.svg';
import canada_black_en from '../static/FIPs/canada_black_en.svg';

class MyNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	
	onToggle = () => {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));
	}
	
	render() {
		return (
			<header>
				<nav className="navbar navbar-default" id="first-nav">
					<div className="container">
						<div className="navbar-header">
							{/* FIP */}
							<a className="navbar-brand" href="https://www.canada.ca">
								<img src={this.props.homePage ? canada_white_en : canada_black_en} alt="GC Logo" />
							</a>
							{/* Button to display contents of .navbar-collapse on mobile */}
							<button className={this.state.isOpen ? 'navbar-toggle' : 'navbar-toggle collapsed'} data-toggle="collapse" data-target="#menu-items" aria-expanded={this.state.isOpen} onClick={this.onToggle}>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						{/* English / Français button */}
						<ul className="nav navbar-nav navbar-right" id="lang-button-desktop">
							<li><NavLink exact to="/home">Français</NavLink></li>
						</ul>
					</div>
				</nav>
				
				<nav className="navbar navbar-default" id="second-nav">
					<div className="container">
						<div className={this.state.isOpen ? 'navbar-collapse collapse in' : 'navbar-collapse collapse'} id="menu-items" aria-expanded={this.state.isOpen}>
							<ul className="nav navbar-nav navbar-right">
								<li><NavLink exact to="/home">Home</NavLink></li>
								<li><NavLink exact to="/schedule">Schedule</NavLink></li>
								<li id="lang-button-mobile"><NavLink exact to="/home">Français</NavLink></li>
								<li><hr /></li>
								<li><NavLink exact to="/">Logout</NavLink></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
}

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(MyNav);
