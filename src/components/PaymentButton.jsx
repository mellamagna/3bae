import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

const PaymentButton = () => {

	return (
		<span>
			<Button variant="success" id="paymentbutton"><Link to="/success" className="buttonlink">Pay Now</Link></Button>
		</span>
	);
};

export default PaymentButton;