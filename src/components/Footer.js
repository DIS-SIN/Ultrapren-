import React from 'react';
import canada_white from '../static/FIPs/canada_white.svg';
import canada_colour from '../static/FIPs/canada_colour.svg';

function Footer(props) {
	return (
		<footer>
			<div className="container">
				<div id="footer-contents">
					<a href="#top">Top of page</a>
					<img className="img-responsive" src={props.homePage ? canada_white : canada_colour} alt="GC Logo" />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
