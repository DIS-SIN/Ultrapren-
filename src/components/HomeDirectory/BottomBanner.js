import React from 'react';
import { Panel } from './PlannerSelector';

function BottomBanner() {
	return (
		<div id="bottom-banner">
			<div className="container-fluid banner" id="river-background">
				<div className="outer-flex">
					<div className="container banner">
						<h1>Additional Tools</h1>
					</div>
				</div>
			</div>
			
			<div className="container">
				<div className="row banner-centered">
					<Panel label="Learning Schedule" target="/schedule" glyph="glyphicon glyphicon-education"/>
				</div>
			</div>
		</div>
	);
}

export default BottomBanner;
