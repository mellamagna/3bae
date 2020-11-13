import React from 'react';
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
	return (
		<div className="container-fluid" id="headernavbar">
			<nav>
				<ul className="nav">
					<li className="nav-item">
						<Link className="nav-link" to="/"><img src="3bae.svg" height="50" alt="3bae" id="logo"/></Link>
					</li>
					<li className="nav-item">
						<span id="slogan">We're Like eBay, But With a Three&trade;</span>
					</li>
					<li className="vl"></li>
					<li className="nav-item">
						<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/listings">Listings</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/cart">Cart</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default HeaderNavbar;