import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

const CheckoutButton = () => {

	const handleClick = () => {
		return <Redirect to="/checkout"/>;
	}

	return (
		<span>
			<Button variant="success" id="checkoutbutton" disabled><Link to="/checkout" className="buttonlink">Checkout</Link></Button>
		</span>
	);
};

export default CheckoutButton;