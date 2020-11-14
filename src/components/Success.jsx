import React, { props, useEffect } from 'react';
import ThreeBaeLogo from './ThreeBaeLogo';

const Success = ({ resetCart }) => {

	useEffect(() => {
		resetCart();
	},[]);

	return (
		<div className="container" style={{textAlign: "center"}}>
			<h1>Thank you for shopping at</h1>
			<ThreeBaeLogo />
		</div>
	);
};

export default Success;