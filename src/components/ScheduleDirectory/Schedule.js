import React, { Component } from 'react';
import Footer from '../Footer';
import MyNav from '../MyNav';

class Schedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todayOfferings: []
		};
	}
	
	componentDidMount() {
		// Registhor accepts dates in standard YYYY-MM-DD ISO format.
		let today = new Date(Date.now());
		let todayYear = today.getFullYear();
		// Months are 0-indexed in JS
		let todayMonth = today.getMonth() + 1;
		let todayDay = today.getDate();
		let isoDate = `${todayYear}-${todayMonth}-${todayDay}`;
		fetch(`https://registhor.da-an.ca/api/v1/offerings?date_1=${isoDate}`)
			.then(resp => resp.json())
			.then((data) => {
				this.setState({
					todayOfferings: data.results
				})
			});
	}
	
	render() {
		let dayOfWeek = new Date(Date.now()).getDay();
		// 7 for Saturday, 0 for Sunday
		let isWeekend = dayOfWeek === 7 || dayOfWeek === 0;
		// Specify in title if no offerings due to weekend
		let scheduleTitle;
		if (this.state.todayOfferings.length) {
			scheduleTitle = <h2>Today in the Classroom</h2>;
		} else if (isWeekend) {
			scheduleTitle = <h4>No offerings scheduled for today - it's the weekend!</h4>;
		} else {
			scheduleTitle = <h4>No offerings scheduled for today.</h4>;
		}
		let scheduleTable = (
			<table id="schedule-table" className="table table-hover">
				<thead>
					<tr>
						<td></td>
						<td>Course Code</td>
						<td>Course Title</td>
						<td>City</td>
					</tr>
				</thead>
				<tbody>
					{this.state.todayOfferings.map(offering =>
						<tr key={offering.offering_id}>
							<td><a className="table-link" href={`https://explorer.da-an.ca/course-result?course_code=${offering.course_code}`}>&nbsp;</a></td>
							<td>{offering.course_code}</td>
							<td>{offering.course_title}</td>
							<td>{offering.offering_city}</td>
						</tr>
					)}
				</tbody>
			</table>
		);
		
		return (
			<div className="schedule-page">
				<MyNav homePage={false}/>
				<div className="container">
					{scheduleTitle}
					{this.state.todayOfferings.length ? scheduleTable : null}
				</div>
				<Footer homePage={false}/>
			</div>
		);
	}
}

export default Schedule;
