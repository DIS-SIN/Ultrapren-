import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { vicePresident, directorsGeneral, directors } from '../../utils/orgChart';

export function Panel(props) {
	return (
		<div className="col-xs-12 col-sm-4">
			<div className="thumbnail banner">
				<Link exact="true" to={props.target}>
					<div className="outer-flex">
						<div className="banner banner-centered">
							<span className={props.glyph}></span>
							<div className="caption text-center">
								<h3>{props.label}</h3>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

class ListPanel extends Component {
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
			<div className="col-xs-12 col-sm-4">
				<div className="thumbnail banner" aria-expanded={this.state.isOpen} onClick={this.onToggle}>
					<div className="outer-flex">
						<div className="banner banner-centered">
							<span className={this.props.glyph}></span>
							<div className="caption text-center">
								<h3>{this.props.label}</h3>
							</div>
						</div>
					</div>
				</div>
				
				{/* Collapsed list with names */}
				<div className={this.state.isOpen ? 'collapse in' : 'collapse'} aria-expanded={this.state.isOpen}>
					<table className="table">
						<tbody>
							{this.props.names.map((name) => {
								return (
									<tr key={`button-${name}`}>
										<td className="name-list">
											<Link exact="true" to={this.props.target}>
												<button className="btn btn-success" style={{ width: '100%' }} data-target={`planner-${name}`}>{name}</button>
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

function PlannerSelector() {
	return (
		<div className="container">
			<div className="row">
				{/* View Branch */}
				<ListPanel label="Plan Branch" target="/planner" glyph="glyphicon glyphicon-fire" names={vicePresident}/>
				
				{/* View Directorates */}
				<ListPanel label="Plan Directorates" target="/planner" glyph="glyphicon glyphicon-leaf" names={directorsGeneral}/>
				
				{/* View Teams */}
				<ListPanel label="Plan Teams" target="/planner" glyph="glyphicon glyphicon-cloud" names={directors}/>
			</div>
		</div>
	);
}

export default PlannerSelector;
