import React from 'react';
import ThreeBae from './ThreeBae';
import ThreeBaeLogo from './ThreeBaeLogo';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="container-fluid" id="footer">
			<div id="logofooter">
				<Link to="/"><ThreeBaeLogo /></Link>
				<p><br />&copy; <ThreeBae /> Corporation 2020. No rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;