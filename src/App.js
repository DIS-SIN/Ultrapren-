import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import './static/App.css';
import Home from './components/HomeDirectory/Home';
import Login from './components/Login';
import Schedule from './components/ScheduleDirectory/Schedule';
import ToDo from './components/ToDoDirectory/ToDo';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Route exact path="/" component={Login}/>
				<Route exact path="/home" component={Home}/>
				<Route exact path="/schedule" component={Schedule}/>
				<Route exact path="/planner" component={ToDo} />
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
