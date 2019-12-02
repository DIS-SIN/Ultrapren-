import React from 'react';
import Footer from '../Footer';
import MyNav from '../MyNav';
import ToDoTable from './ToDoTable';

function ToDo() {
	return (
		<div className="to-do-page">
			<MyNav homePage={false}/>
			<div className="container planners-parent">
				<ToDoTable titleText="Current Priorities" tableClass="current-todos"/>
				<ToDoTable titleText="Backlog" tableClass="backlog-todos"/>
			</div>
			<Footer homePage={false} />
		</div>
	);
}

export default ToDo;
