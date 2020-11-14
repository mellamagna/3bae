import React, { props, useEffect } from 'react';
import RandomConf from './RandomConf';
import ThreeBaeLogo from './ThreeBaeLogo';
import { Link } from 'react-router-dom';

const Success = ({ resetCart }) => {

	useEffect(() => {
		resetCart();
	},[]);

	return (
		<div className="container" style={{textAlign: "center"}}>
			<h1>Thank you for shopping at</h1>
			<br/>
			<ThreeBaeLogo />
			<br/><br/><br/>
			<h3>Your order confirmation number is #<RandomConf /></h3>
			<br/><br/><br/>
			<h1><Link to="/">Home</Link></h1>
			
		</div>
	);
};

export default Success;