import React from 'react';
import { Button } from 'react-bootstrap';

const CheckoutListing = props => {

	const handleClick = () => {
		props.removeFromCart(props.id);
	}

	return (
		<tr>
			<td>{props.id}</td>
			<td><img src={props.image} width="64" alt={props.name} /></td>
			<td><b>{props.name}</b></td>
			<td><b>${props.price.toFixed(2)}</b></td>
		</tr>
	);
};

export default CheckoutListing;