import React from 'react';
import Banner from './Banner';
import BottomBanner from './BottomBanner';
import Footer from '../Footer';
import MyNav from '../MyNav';
import PlannerSelector from './PlannerSelector';

function Home() {
	return (
		<div className="home-page">
			<MyNav homePage={true}/>
			<Banner />
			<PlannerSelector />
			<BottomBanner />
			<Footer homePage={true}/>
		</div>
	);
}

export default Home;
