import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import { textColorMap } from '../../utils/customFormatters';
import profilePic from '../../static/img/profiles/johnp.jpg';

class MoreInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rowData: {},
			columnVisibility: {}
		};
	}
	
	// Use this lifecycle method as constructor only called once, even if props
	// change
	componentWillReceiveProps(nextProp) {
		this.setState({
			rowData: nextProp.rowData,
			columnVisibility: nextProp.columnVisibility
		});
	}
	
	onChangeInput = (e) => {
		// Why tho??
		e.persist();
		this.setState((prevState) => {
			return {
				rowData: {
					...prevState.rowData,
					[e.target.name]: e.target.value
				}
			};
		});
	}
	
	onSubmitAdditionalInfo = (e) => {
		e.preventDefault();
		this.props.updateRow(this.props.rowData.id, {
			priority: e.target.priority.value,
			start_date: e.target.start_date.value,
			end_date: e.target.end_date.value,
			progress: e.target.progress.value,
			ftes: e.target.ftes.value,
			o_and_m: e.target.o_and_m.value,
			project_lead: e.target.project_lead.value,
			cost_centre: e.target.cost_centre.value,
			last_edited_by: e.target.last_edited_by.value
		});
		this.props.closeModal();
	}
	
	onCancelAdditionalInfo = (e) => {
		e.preventDefault();
		this.props.closeModal();
	}
	
	componentDidMount() {
		Modal.setAppElement('body');
	}
	
	render() {
		return (
			<SlidingPane
				className="extra-info"
				isOpen={this.props.isModalOpen}
				title="Additional Info"
				onRequestClose={() => {
					this.props.closeModal();
				}}
			>
				<form className="extra-info-form" onSubmit={this.onSubmitAdditionalInfo}>
					<table>
						<tbody>
							<tr style={{ display: this.state.columnVisibility.priority === true ? 'none' : 'table-row' }}>
								<td><label>Priority</label></td>
								<td>
									<select name="priority" value={this.state.rowData.priority} onChange={this.onChangeInput} style={{ color: '#fff', fontWeight: 'bold', height: '3rem', backgroundColor: textColorMap[this.state.rowData.priority] }}>
										<option value="High">High</option>
										<option value="Medium">Medium</option>
										<option value="Low">Low</option>
									</select>
								</td>
							</tr>
							<tr style={{ display: this.state.columnVisibility.start_date === true ? 'none' : 'table-row' }}>
								<td><label>Start Date</label></td>
								<td><input type="date" name="start_date" value={this.state.rowData.start_date} onChange={this.onChangeInput}/></td>
							</tr>
							<tr style={{ display: this.state.columnVisibility.end_date === true ? 'none' : 'table-row' }}>
								<td><label>End Date</label></td>
								<td><input type="date" name="end_date" value={this.state.rowData.end_date} onChange={this.onChangeInput}/></td>
							</tr>
							<tr style={{ display: this.state.columnVisibility.progress === true ? 'none' : 'table-row' }}>
								<td><label>Progress</label></td>
								<td>
									<select name="progress" value={this.state.rowData.progress} onChange={this.onChangeInput} style={{ color: '#fff', fontWeight: 'bold', height: '3rem', backgroundColor: textColorMap[this.state.rowData.progress] }}>
										<option value="Done">Done</option>
										<option value="In Progress">In Progress</option>
										<option value="Falling Behind">Falling Behind</option>
										<option value="Planning">Planning</option>
									</select>
								</td>
							</tr>
							<tr style={{ display: this.state.columnVisibility.ftes === true ? 'none' : 'table-row' }}>
								<td><label>FTEs</label></td>
								<td>
									<select name="ftes" value={this.state.rowData.ftes} onChange={this.onChangeInput}>
										<option value={0}>0</option>
										<option value={1}>1</option>
										<option value={2}>2</option>
										<option value={3}>3</option>
										<option value={4}>4</option>
										<option value={5}>5</option>
										<option value={6}>6</option>
										<option value={7}>7</option>
										<option value={8}>8</option>
										<option value={9}>9</option>
										<option value={10}>10</option>
									</select>
								</td>
							</tr>
							<tr style={{ display: this.state.columnVisibility.o_and_m === true ? 'none' : 'table-row' }}>
								<td><label>O&M</label></td>
								<td><input type="text" name="o_and_m" value={this.state.rowData.o_and_m} onChange={this.onChangeInput}/></td>
							</tr>
							<tr style={{ display: this.state.columnVisibility.project_lead === true ? 'none' : 'table-row' }}>
								<td><label>Project Lead</label></td>
								<td><input type="text" name="project_lead" value={this.state.rowData.project_lead} onChange={this.onChangeInput}/></td>
							</tr>
							<tr style={{ display: this.state.columnVisibility.cost_centre === true ? 'none' : 'table-row' }}>
								<td><label>Cost Centre</label></td>
								<td><input type="text" name="cost_centre" value={this.state.rowData.cost_centre} onChange={this.onChangeInput}/></td>
							</tr>
							<tr style={{ display: this.state.columnVisibility.last_edited_by === true ? 'none' : 'table-row' }}>
								<td><label>Last Edited By</label></td>
								<td><input type="text" name="last_edited_by" value={this.props.fullName} readonly/></td>
							</tr>
							{/* Display profile pic under same conditions as column 'Last Edited By' */}
							<tr className="tr-last-edited-by" style={{ display: this.state.columnVisibility.last_edited_by === true ? 'none' : 'table-row' }}>
								<td></td>
								<td><img src={profilePic} alt={this.props.fullName}/></td>
							</tr>
						</tbody>
					</table>
					<div className="extra-info-buttons">
						<button className="btn btn-primary" action="submit">Submit</button>
						<button className="btn btn-primary cancel" onClick={this.onCancelAdditionalInfo}>Cancel</button>
					</div>
				</form>
			</SlidingPane>
		);
	}
}

// Add Redux to component
const mapStateToProps = (state) => {
	return {
		fullName: state.mainReducer.fullName
	};
}
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(MoreInfo);
