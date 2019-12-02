import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabulator from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';
import getTableColumns from '../../utils/getTableColumns';
import tableOptions from '../../utils/tableOptions';
import MoreInfo from './MoreInfo';

class ToDoTable extends Component {
	constructor(props) {
		super(props);
		// Placeholders for Tabulator DOM element
		this.el = React.createRef();
		this.tabulator = null;
		this.state = {
			isModalOpen: false,
			rowData: {},
			columnVisibility: {}
		};
	}
	
	addRow = () => {
		// Much like React elements, Tabulator rows require unique identifiers
		// Use ISO timestamp (no risk of overflow) + username (no risk of collisions
		// from users creating rows simultaneously)
		let timestamp = new Date(Date.now()).toISOString();
		let rowID = `${timestamp}.${this.props.username}`;
		// All fields need to be initialized with empty string
		// Otherwise, will have value 'undefined' and React will assume column is
		// an uncontrolled field -> throw error once user edits
		this.tabulator.addData([{id: rowID, objective: '', priority: '', start_date: '', end_date: '', progress: '', ftes: '', o_and_m: '', project_lead: '', cost_centre: '', last_edited_by: '' }]);
	}
	
	updateRow = (rowID, data) => {
		this.tabulator.updateData([
			{
				id: rowID,
				...data
			}
		]);
	}
	
	showModal = (rowDataGetter) => {
		// Store row data in object with format { col_1: 'A', col_2: 'B', ...}
		// Have to create object as Tabulator returns object of getters rather than
		// object of strings as desired
		let rowData = Object.keys(rowDataGetter).reduce((obj, key) => {
			obj[key] = rowDataGetter[key];
			return obj;
		}, {});
		
		// Get visibility of columns
		// Those that aren't visible due to screen size will be displayed in modal
		let columns = this.tabulator.getColumnLayout();
		let columnVisibility = columns.reduce((obj, elem) => {
			obj[elem.field] = elem.visible;
			return obj;
		}, {});
		
		this.setState({
			rowData: rowData,
			columnVisibility: columnVisibility,
			isModalOpen: true
		});
	}
	
	closeModal = () => {
		this.setState({ isModalOpen: false });
	}
	
	// Create table once component has mounted
	componentDidMount() {
		// Pull data from localStorage
		// If none present, default to test data set via short circuiting
		let data = (JSON.parse(localStorage.getItem(`tableData-${this.props.tableClass}`))) || [
			{ id: 1, objective: 'Hey, Hey, What Can I Do', priority: 'Low', start_date: '2019-04-20', end_date: '2019-04-21', progress: 'Planning', ftes: 5, o_and_m: 100000, project_lead: '', cost_centre: '', last_edited_by: '' },
			{ id: 2, objective: 'Stairway to Heaven', priority: 'Low', start_date: '2019-04-20', end_date: '2019-04-21', progress: 'Done', ftes: 2, o_and_m: 80, project_lead: '', cost_centre: '', last_edited_by: '' },
			{ id: 3, objective: 'Going to California', priority: 'Medium', start_date: '2019-04-20', end_date: '2019-04-21', progress: 'Falling Behind', ftes: 1, o_and_m: 800, project_lead: '', cost_centre: '', last_edited_by: '' }
		]
		
		this.tabulator = new Tabulator(this.el, {
			columns: getTableColumns(this.showModal),
			data: data,
			...tableOptions
		});
	}
	
	render() {
		return (
			<>
				<MoreInfo
					isModalOpen={this.state.isModalOpen}
					rowData={this.state.rowData}
					columnVisibility={this.state.columnVisibility}
					closeModal={this.closeModal}
					updateRow={this.updateRow}
				/>
				<div className="planner-title">
					<h2>{this.props.titleText}</h2>
					<button onClick={this.addRow} className="btn btn-primary">New Entry</button>
				</div>
				<div ref={el => (this.el = el)} className={`planner ${this.props.tableClass}`}></div>
			</>
		);
	}
}

// Add Redux to component
const mapStateToProps = (state) => {
	return {
		username: state.mainReducer.username
	};
}
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ToDoTable);
